import pandas as pd

def analyze_dataset(df):
    total_rows = df.shape[0]
    total_columns = df.shape[1]

    column_names = df.columns.tolist() #make column name into list

    missing_values = df.isnull().sum().to_dict()

    data_types = df.dtypes.astype(str).to_dict()

    duplicate_rows =  int(df.duplicated().sum())

    result = {
        "Total_rows": int(total_rows),
        "Total_columns": int(total_columns),
        "Column_names": column_names,
        "Missing_values": missing_values,
        "Data_types": data_types,
        "Duplicate_rows": duplicate_rows
    }

    return result