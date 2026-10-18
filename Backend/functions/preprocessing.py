import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.impute import SimpleImputer #use for fill missing values
from sklearn.preprocessing import OneHotEncoder 
from sklearn.compose import ColumnTransformer #Use for diff preprocessing on diff col 
from sklearn.pipeline import Pipeline #Combine preprocessing steps

def prepare_dataset(df,target_column):
    df = df.dropna(subset=[target_column])

    X = df.drop(columns=[target_column]) #all column features without target column
    y = df[target_column] 

    numeric_columns = X.select_dtypes(include=["number"]).columns.tolist()
    text_columns = X.select_dtypes(exclude=["number"]).columns.tolist()  # Text aur categorical columns identify kiye

    numeric_pipeline = Pipeline([
        ("imputer",SimpleImputer(strategy="median"))
    ])

    text_pipeline = Pipeline([
        ("Imputer",SimpleImputer(strategy="most_frequent")),
        ("Encoder", OneHotEncoder(handle_unknown="ignore"))
    ])

    preprocessor = ColumnTransformer([
        ("Numeric",numeric_pipeline,numeric_columns),
        ("Text",text_pipeline,text_columns)
    ])

    X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=0.2,random_state=42)

    X_train = preprocessor.fit_transform(X_train)  
    X_test = preprocessor.transform(X_test)  

    return X_train, X_test, y_train, y_test, preprocessor