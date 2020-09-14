# 온라인 등록 가능 여부

설명
설명

## Endpoints

**`POST`** /sys/giftCardServiceApi.do

## Parameters

#### Path parameters

| Path parameter   | Description |
|:-----------------|:------------|
|none|none|

#### Query string parameters

| Query string parameter | Required / Optional | Description | Type |
|:-----------------------|:--------------------|:------------|:------------|
| **SALORGCD**   | Required | 설명 설명 파람파람파람팔마. | String |
| **GCSERIALNO**   | Required | 설명 설명. | String |
| **PINNO**   | Required | 설명 설명. | String |

## Sample request

```console
curl -d "CALLTYPE=GETREMAINMLG&SALORGCD=SG13&GCBARCODE=0305557525879365" \
-H "Content-Type: application/x-www-form-urlencoded" \
-X POST 10.155.8.26:8409/sys/giftCardServiceApi.do
```

## Sample response

```json
{
    "surfreport": [
        {
            "beach": "Santa Cruz",
            "monday": {
                "1pm": {
                    "tide": 5,
                    "wind": 15,
                    "watertemp": 80,
                    "surfheight": 5,
                    "recommendation": "Go surfing!"
                },
                "2pm": {
                    "tide": -1,
                    "wind": 1,
                    "watertemp": 50,
                    "surfheight": 3,
                    "recommendation": "Surfing conditions are okay, not great."
                },
                "3pm": {
                    "tide": -1,
                    "wind": 10,
                    "watertemp": 65,
                    "surfheight": 1,
                    "recommendation": "Not a good day for surfing."
                }
                ...
            }
        }
    ]
}
```

## Response definition

| Response item | Description | Data type |
|:--------------|:------------|:----------|
| **day**   | String | Unique identifier for the book. |
| **time** | String | The title of the book. |
| **{day}/{time}/tide** | String | Descriptive text for the book, including an abstract. |
| **{day}/{time}/wind** | Collection([Author](author.md)) | A collection of author resources that represent the authors of the book. |
| **{day}/{time}/watertemp** | String - URL | A fully qualified URL to the purchase page for this book. |
| **{day}/{time}/surfheight** | DateTime | The date and time the book record was last modified. |

