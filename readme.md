# Project Overview

## Project Name

Practice Practice Practice 

## Project Description

Practice Practice Practice (PPP) is a react-based productivity web application that allows users to list an interest in a particular category (i.e. entertainment, health, etc.) and guides them through a single week to practice that particular interest on their own terms.   


## Wireframes

![Screen Shot 2020-12-04 at 1 29 28 PM](https://user-images.githubusercontent.com/74211139/101216937-409b0580-3635-11eb-9eda-81aee36b1b25.png)

![Screen Shot 2020-12-04 at 1 29 51 PM](https://user-images.githubusercontent.com/74211139/101216974-501a4e80-3635-11eb-88b5-216f2b9b5e5c.png)

![Screen Shot 2020-12-04 at 1 30 39 PM](https://user-images.githubusercontent.com/74211139/101216990-5c9ea700-3635-11eb-968b-926c72a6da89.png)


## Component Hierarchy

![Screen Shot 2020-12-04 at 1 30 59 PM](https://user-images.githubusercontent.com/74211139/101217028-6fb17700-3635-11eb-8ec4-435f8a914b51.png)

## API and Data Sample

A request and response sample from the Airtable API:

```
EXAMPLE REQUEST
curl "https://api.airtable.com/v0/appJUW21zxe6FEjd1/Practice%20Practice%20Practice?maxRecords=3&view=Grid%20view" \
  -H "Authorization: Bearer YOUR_API_KEY"
EXAMPLE RESPONSE
{
    "records": [
        {
            "id": "rec1SfHm7H97XC3Fi",
            "fields": {
                "Topic": "Music",
                "Specifics": "A Minor Scale",
                "Comments": "Arppegios, traveling up and down the scale ",
                "Days": "4",
                "Hours": "5",
                "Completed": "No"
            },
            "createdTime": "2020-12-04T21:09:54.000Z"
        },
        {
            "id": "reckFRl0st01bSwuk",
            "fields": {},
            "createdTime": "2020-12-04T21:09:54.000Z"
        },
        {
            "id": "recw3ubx7EfW93etn",
            "fields": {},
            "createdTime": "2020-12-04T21:09:54.000Z"
        }
    ],
    "offset": "recw3ubx7EfW93etn"
}
```

#### MVP 

- Render sample data from the Airtable API on the app page 
- Allow users to view their inputs from their form and render data to the app home page
- Let users delete their posts

#### PostMVP  

- Add a calendar feature
- Add sound effects and a congratulations screen on practice completion

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|December 3-4| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|December 4| Project Approval | Incomplete
|December 4-5| Core Application Structure (HTML, CSS, etc.) | Incomplete
|December 4-10| Pseudocode / actual code | Incomplete
|December 8| Initial Clickable Model  | Incomplete
|December 8-9| MVP | Incomplete
|December 11| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## SWOT Analysis

### Strengths:

### Weaknesses:

### Opportunities:

### Threats: