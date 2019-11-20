---
title: Import Census data into Postgres
date: "2019-08-03T22:12:00.121Z"
tags: ["postgres"]
header: { type: 'icon', bgColor: '#2A5480', icon: 'postgres' }
description: How to import Census data into Postgres to use United States Zip Codes in your location based project
---

The Census provides alot of useful data.
To import it go to `https://www2.census.gov/geo/tiger/` and select `Directory_Contents_ReadMe.pdf`.

Depending on the time of year, not all of the current data is provided, so you might have to use previous year.
`https://www2.census.gov/geo/tiger/TIGER2018/` and selected `Directory_Contents_ReadMe.pdf`.

In this example, we are looking for zip codes. The zip codes are under ZCTA5, so click the folder and download the zip.

Once the file is download, unzip the file.
Now you are ready to import the data into your postgres database.
Run the following command:
```
shp2pgsql -I -s 4269 -W Latin1 tl_2018_us_zcta510.shp table_name | psql -d your_data -U your_postgres_role
```

Make sure you udpate the following params to your data:
* `tl_2018_us_zcta510.shp`
* `table_name`
* `your_data`
* `your_postgres_role`
