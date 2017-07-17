"use strict";
class HeliosSettings {
    constructor() {
        this.settings = {
            "savedTables": [
                {
                    "name": "DPS",
                    "sortKey": "dps",
                    "ascending": false,
                    "cols": [
                        {
                            "key": "name",
                            "useShortName": true,
                            "useTransform": false
                        },
                        {
                            "key": "Job",
                            "useShortName": false,
                            "useTransform": "StringToLowercase"
                        },
                        {
                            "key": "crithit%",
                            "useShortName": true,
                            "useTransform": false
                        },
                        {
                            "key": "DirectHitPct",
                            "useShortName": true,
                            "useTransform": false
                        },
                        {
                            "key": "CritDirectHitPct",
                            "useShortName": true,
                            "useTransform": false
                        },
                        {
                            "key": "maxhit",
                            "useShortName": true,
                            "useTransform": false
                        },
                        {
                            "key": "dps",
                            "useShortName": false,
                            "useTransform": false
                        }
                    ]
                }
            ],
            "colorScheme": {
                "tank":   "rgba(66, 66, 183, 1)",
                "healer": "rgba(66, 183, 66, 1)",
                "dps":    "rgba(183, 66, 66, 1)",
                "other":  "rgba(128,128,128, 1)"
            },
            "rankBarsThickness": "2px"
        };
    }

    get(key) {
        return this.settings[key];
    }
}