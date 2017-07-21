"use strict";
class HeliosSettings {
    constructor() {
        this.settings = {
            "version": 1,
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
            "rankBarsThickness": "2px",
            "savedEncounters": [],
            "displayTables": true,
            "resizeEnabled": false
        };

        console.info("Attempting to load settings from persistent storage...");
        console.info("If you find that your settings do not save or keep resetting, consider using a newer version of OverlayPlugin.");

        // Version Check
        let savedVersion = window.localStorage.getItem('version');
        if (savedVersion !== null && this.settings['version'] != savedVersion) {
            console.warn("Settings are from an older version of this overlay. If problems occur, please consider resetting your settings.");
        }

        // Merge Saved Settings.
        for (let k in this.settings) {
            if (window.localStorage.getItem(k) !== null) {
                this.settings[k] = JSON.parse(window.localStorage.getItem(k));
            }
            else {
                this.set(k, this.settings[k]);
            }
        }
    }

    get(key) {
        return this.settings[key];
    }

    set(key, value) {
        this.settings[key] = value;
        window.localStorage.setItem(key, JSON.stringify(value));
    }
}