export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export function validateDatasetFile(file){
    if(!file ){
        return "Please select a file.";
    }

    const isCsv = file.name.toLowerCAse().endsWith(".csv");

    if(isCsv){
        return "Please select a CSV file.";
    }

    if(file.size === 0){
        return "The selected file is empty.";
    }

    if(file.size > MAX_FILE_SIZE){
        return "The selected file exceeds the maximum size of 5MB.";
    }


    return null;
}