import pandas as pd

# Load the Excel file
excel_file = '11 names.xlsx'
df = pd.read_excel(excel_file)
print(df)
# Convert to JSON
json_data = df.to_json(orient='records', indent=4)

# Save to a JSON file
with open('output.json', 'w') as json_file:
    json_file.write(json_data)

print("Excel file has been converted to JSON.")