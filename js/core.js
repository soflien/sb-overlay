"use strict";
class HeliosCore {
	constructor() {
		// Stuff
        this.ActEncKeys = {
            "duration": {
                "key": "duration",
                "description": "Duration (Formatted)",
                "long": "Duration",
                "short": "Dur.",
                "sorttype": "string"
            },
            "DURATION": {
                "key": "DURATION",
                "description": "Duration (in seconds)",
                "long": "Duration",
                "short": "Dur.",
                "sorttype": "number"
            },
            "damage": {
                "key": "damage",
                "description": "Total Damage",
                "long": "Damage",
                "short": "DMG",
                "sorttype": "number"
            },
            "dps": {
                "key": "dps",
                "description": "DPS (in decimals)",
                "long": "DPS",
                "short": "DPS",
                "sorttype": "number"
            },
            "DPS": {
                "key": "DPS",
                "description": "DPS (integer)",
                "long": "DPS",
                "short": "DPS",
                "sorttype": "number"
            },
            "ENCDPS": {
                "key": "ENCDPS",
                "description": "Encounter DPS (integer)",
                "long": "Encounter DPS",
                "short": "RDPS",
                "sorttype": "number"
            },
            "encdps": {
                "key": "encdps",
                "description": "Encounter DPS (in decimals)",
                "long": "Encounter DPS",
                "short": "RDPS",
                "sorttype": "number"
            },
            "hits": {
                "key": "hits",
                "description": "Number of Hits",
                "long": "Hits",
                "short": "Hits",
                "sorttype": "number"
            },
            "crithits": {
                "key": "crithits",
                "description": "Number of Critical Hits",
                "long": "Critical Hits",
                "short": "Crit. Hits",
                "sorttype": "number"
            },
            "crithit%": {
                "key": "crithit%",
                "description": "Percentage of Critical Hits",
                "long": "Critical Hit %",
                "short": "Crit%",
                "sorttype": "string"
            },
            "misses": {
                "key": "misses",
                "description": "Number of Misses",
                "long": "Misses",
                "short": "Misses",
                "sorttype": "number"
            },
            "swings": {
                "key": "swings",
                "description": "Number of Attacks",
                "long": "Swings",
                "short": "Swings.",
                "sorttype": "number"
            },
            "tohit": {
                "key": "tohit",
                "description": "Percentage of Hits (decimal)",
                "long": "Accuracy",
                "short": "Acc%",
                "sorttype": "number"
            },
            "TOHIT": {
                "key": "TOHIT",
                "description": "Percentage of Hits (integer)",
                "long": "Accuracy",
                "short": "Acc%",
                "sorttype": "number"
            },
            "maxhit": {
                "key": "maxhit",
                "description": "Maximum Hit",
                "long": "Maximum Hit",
                "short": "MaxHit",
                "sorttype": "number"
            },
            "MAXHIT": {
                "key": "MAXHIT",
                "description": "Maximum Hit (no skill name)",
                "long": "Maximum Hit",
                "short": "MaxHit",
                "sorttype": "number"
            },
            "healed": {
                "key": "healed",
                "description": "Amount Healed",
                "long": "Healed",
                "short": "Healed",
                "sorttype": "number"
            },
            "enchps": {
                "key": "enchps",
                "description": "Heal Per Second (decimal)",
                "long": "HPS",
                "short": "HPS",
                "sorttype": "number"
            },
            "ENCHPS ": {
                "key": "ENCHPS ",
                "description": "Heal Per Second (integer)",
                "long": "HPS",
                "short": "HPS",
                "sorttype": "number"
            },
            "heals": {
                "key": "heals",
                "description": "Number of Heals cast",
                "long": "Heals",
                "short": "Heals",
                "sorttype": "number"
            },
            "critheals": {
                "key": "critheals",
                "description": "Number of Critical Heals",
                "long": "Critical Heals",
                "short": "CritHeals",
                "sorttype": "number"
            },
            "critheal%": {
                "key": "critheal%",
                "description": "Percentage of Critical Heals",
                "long": "Critical Heal %",
                "short": "CritHeal%",
                "sorttype": "number"
            },
            "maxheal": {
                "key": "maxheal",
                "description": "Maximum Heal Skill",
                "long": "Maximum Heal",
                "short": "MaxHeal",
                "sorttype": "string"
            },
            "MAXHEAL": {
                "key": "MAXHEAL",
                "description": "Maximum Heal Skill (no skill name)",
                "long": "Maximum Heal",
                "short": "MaxHeal",
                "sorttype": "number"
            },
            "kills": {
                "key": "kills",
                "description": "Number of Enemies Killed",
                "long": "Kills",
                "short": "Kills",
                "sorttype": "number"
            },
            "deaths": {
                "key": "deaths",
                "description": "Number of Allied Deaths",
                "long": "Deaths",
                "short": "Deaths",
                "sorttype": "number"
            },
            "CurrentZoneName": {
                "key": "CurrentZoneName",
                "description": "Name of current area",
                "long": "Current Area",
                "short": "Current Area",
                "sorttype": "string"
            },
            "Last10DPS": {
                "key": "Last10DPS",
                "description": "DPS over last 10 seconds",
                "long": "DPS (10s average)",
                "short": "DPS (10s)",
                "sorttype": "number"
            },
            "Last30DPS": {
                "key": "Last30DPS",
                "description": "DPS over last 30 seconds",
                "long": "DPS (30s average)",
                "short": "DPS (30s)",
                "sorttype": "number"
            },
            "Last60DPS": {
                "key": "Last60DPS",
                "description": "DPS over last 60 seconds",
                "long": "DPS (60s average)",
                "short": "DPS (60s)",
                "sorttype": "number"
            }
        };
        this.ActCombatantKeys = {
            "name": {
                "key": "name",
                "description": "Player Name",
                "long": "Player Name",
                "short": "Name",
                "sorttype": "string"
            },
            "duration": {
                "key": "duration",
                "description": "Duration (Formatted)",
                "long": "Duration",
                "short": "Dur.",
                "sorttype": "string"
            },
            "DURATION": {
                "key": "DURATION",
                "description": "Duration (in seconds)",
                "long": "Duration",
                "short": "Dur.",
                "sorttype": "number"
            },
            "damage": {
                "key": "damage",
                "description": "Total Damage",
                "long": "Damage",
                "short": "DMG",
                "sorttype": "number"
            },
            "dps": {
                "key": "dps",
                "description": "DPS (in decimals)",
                "long": "DPS",
                "short": "DPS",
                "sorttype": "number"
            },
            "DPS": {
                "key": "DPS",
                "description": "DPS (integer)",
                "long": "DPS",
                "short": "DPS",
                "sorttype": "number"
            },
            "ENCDPS": {
                "key": "ENCDPS",
                "description": "Encounter DPS (integer)",
                "long": "Encounter DPS",
                "short": "RDPS",
                "sorttype": "number"
            },
            "encdps": {
                "key": "encdps",
                "description": "Encounter DPS (in decimals)",
                "long": "Encounter DPS",
                "short": "RDPS",
                "sorttype": "number"
            },
            "hits": {
                "key": "hits",
                "description": "Number of Hits",
                "long": "Hits",
                "short": "Hits",
                "sorttype": "number"
            },
            "crithits": {
                "key": "crithits",
                "description": "Number of Critical Hits",
                "long": "Critical Hits",
                "short": "Crit. Hits",
                "sorttype": "number"
            },
            "crithit%": {
                "key": "crithit%",
                "description": "Percentage of Critical Hits",
                "long": "Critical Hit %",
                "short": "Crit%",
                "sorttype": "string"
            },
            "misses": {
                "key": "misses",
                "description": "Number of Misses",
                "long": "Misses",
                "short": "Misses",
                "sorttype": "number"
            },
            "swings": {
                "key": "swings",
                "description": "Number of Attacks",
                "long": "Swings",
                "short": "Swings.",
                "sorttype": "number"
            },
            "tohit": {
                "key": "tohit",
                "description": "Percentage of Hits (decimal)",
                "long": "Accuracy",
                "short": "Acc%",
                "sorttype": "number"
            },
            "TOHIT": {
                "key": "TOHIT",
                "description": "Percentage of Hits (integer)",
                "long": "Accuracy",
                "short": "Acc%",
                "sorttype": "number"
            },
            "maxhit": {
                "key": "maxhit",
                "description": "Maximum Hit",
                "long": "Maximum Hit",
                "short": "MaxHit",
                "sorttype": "string"
            },
            "MAXHIT": {
                "key": "MAXHIT",
                "description": "Maximum Hit (no skill name)",
                "long": "Maximum Hit",
                "short": "MaxHit",
                "sorttype": "number"
            },
            "healed": {
                "key": "healed",
                "description": "Amount Healed",
                "long": "Healed",
                "short": "Healed",
                "sorttype": "number"
            },
            "enchps": {
                "key": "enchps",
                "description": "Heal Per Second (decimal)",
                "long": "HPS",
                "short": "HPS",
                "sorttype": "number"
            },
            "ENCHPS ": {
                "key": "ENCHPS ",
                "description": "Heal Per Second (integer)",
                "long": "HPS",
                "short": "HPS",
                "sorttype": "number"
            },
            "heals": {
                "key": "heals",
                "description": "Number of Heals cast",
                "long": "Heals",
                "short": "Heals",
                "sorttype": "number"
            },
            "critheals": {
                "key": "critheals",
                "description": "Number of Critical Heals",
                "long": "Critical Heals",
                "short": "CritHeals",
                "sorttype": "number"
            },
            "critheal%": {
                "key": "critheal%",
                "description": "Percentage of Critical Heals",
                "long": "Critical Heal %",
                "short": "CritHeal%",
                "sorttype": "number"
            },
            "maxheal": {
                "key": "maxheal",
                "description": "Maximum Heal Skill",
                "long": "Maximum Heal",
                "short": "MaxHeal",
                "sorttype": "string"
            },
            "MAXHEAL": {
                "key": "MAXHEAL",
                "description": "Maximum Heal Skill (no skill name)",
                "long": "Maximum Heal",
                "short": "MaxHeal",
                "sorttype": "number"
            },
            "kills": {
                "key": "kills",
                "description": "Number of Enemies Killed",
                "long": "Kills",
                "short": "Kills",
                "sorttype": "number"
            },
            "deaths": {
                "key": "deaths",
                "description": "Number of Allied Deaths",
                "long": "Deaths",
                "short": "Deaths",
                "sorttype": "number"
            },
            "Last10DPS": {
                "key": "Last10DPS",
                "description": "DPS over last 10 seconds",
                "long": "DPS (10s average)",
                "short": "DPS (10s)",
                "sorttype": "number"
            },
            "Last30DPS": {
                "key": "Last30DPS",
                "description": "DPS over last 30 seconds",
                "long": "DPS (30s average)",
                "short": "DPS (30s)",
                "sorttype": "number"
            },
            "Last60DPS": {
                "key": "Last60DPS",
                "description": "DPS over last 60 seconds",
                "long": "DPS (60s average)",
                "short": "DPS (60s)",
                "sorttype": "number"
            },
            "damagetaken": {
                "key": "damagetaken",
                "description": "Total Damage Taken",
                "long": "Damage Taken",
                "short": "Dmg. Taken",
                "sorttype": "number"
            },
            "healstaken": {
                "key": "healstaken",
                "description": "Total Heals Taken",
                "long": "Heals Taken",
                "short": "Heals Taken",
                "sorttype": "number"
            },
            "ParryPct": {
                "key": "ParryPct",
                "description": "Parry Percentage",
                "long": "Parries",
                "short": "Parry",
                "sorttype": "string"
            },
            "BlockPct": {
                "key": "BlockPct",
                "description": "Block Percentage",
                "long": "Blocks",
                "short": "Blocks",
                "sorttype": "string"
            },
            "OverHealPct": {
                "key": "OverHealPct",
                "description": "Overheal Percentage",
                "long": "Overheal Percent",
                "short": "Overheal%",
                "sorttype": "string"
            },
            "DirectHitPct": {
                "key": "DirectHitPct",
                "description": "Direct Hit Percentage",
                "long": "Direct Hit %",
                "short": "DH%",
                "sorttype": "string"
            },
            "DirectHitCount": {
                "key": "DirectHitCount",
                "description": "Number of Direct Hits",
                "long": "Direct Hits",
                "short": "DH",
                "sorttype": "number"
            },
            "CritDirectHitCount": {
                "key": "CritDirectHitCount",
                "description": "Number of Critical Direct Hits",
                "long": "Critical Direct Hits",
                "short": "CritDH",
                "sorttype": "number"
            },
            "CritDirectHitPct": {
                "key": "CritDirectHitPct",
                "description": "Critical Direct Hits Percentage",
                "long": "Critical Direct Hit %",
                "short": "CritDH%",
                "sorttype": "string"
            },
            "Job": {
                "key": "Job",
                "description": "Job",
                "long": "Job",
                "short": "Job",
                "sorttype": "string"
            }
        };

		// load settings etc.
        this.settings = new HeliosSettings();
        this.tables = this.settings.get("savedTables");

		// Generate UI
		this.clearNode(document.getElementById("combatantTables"));
		this.generateTables(this.tables);

		// events
        document.addEventListener("onOverlayDataUpdate", this.onOverlayDataUpdate.bind(this));
        try { this.onOverlayDataUpdate({ "detail": ActXiv }); }
        catch (e) {}
	}

	onOverlayDataUpdate(e) {
		document.getElementById("encTime").textContent = e.detail.Encounter.duration;
		document.getElementById("encTitle").textContent = e.detail.Encounter.title;
		document.getElementById("encRDPS").textContent = e.detail.Encounter.dps;
		
		this.updateTable(this.tables, e.detail);
	}

	clearNode(node) {
		while (node.firstChild)
			node.removeChild(node.firstChild);
	}

	generateTables(tableSettings) {
		for (let i = 0; i < tableSettings.length; i++) {
			let container = document.createElement("table");
			let header = document.createElement("thead");
			let colHeaders = document.createElement("tr");

			container.id = `table_${tableSettings[i].name}`;

			for (let j = 0; j < tableSettings[i].cols.length; j++) {
				let column = document.createElement("th");
				column.textContent = tableSettings[i].cols[j].useShortName ? this.ActCombatantKeys[tableSettings[i].cols[j].key].short : this.ActCombatantKeys[tableSettings[i].cols[j].key].long;
				colHeaders.appendChild(column);
			}

			header.appendChild(colHeaders);
			container.appendChild(header);
			container.appendChild(document.createElement("tbody"));
			document.getElementById("combatantTables").appendChild(container);
		}
	}

    updateTable(tables, data) {
        let colorSchemes = this.settings.get("colorScheme");
		for (let i = 0; i < tables.length; i++) {
			let tbl = document.querySelector(`#table_${tables[i].name} > tbody`);
			this.clearNode(tbl);
            
            // sort
            let colNum = 0;
            for (let j = 0; j < tables[i].cols.length; j++) {
                if (tables[i].cols[j].key == tables[i].sortKey) {
                    colNum = j + 1;
                    break;
                }
            }

            // create data
            let maxVal = -9999;
            let combatantData = [];
			for (let j in data.Combatant) {
				let pc = [j];
                for (let k = 0; k < tables[i].cols.length; k++) {
                    let val = data.Combatant[j][tables[i].cols[k].key];
                    if (this.ActCombatantKeys[tables[i].cols[k].key].sorttype == "number") {
                        val *= 1;
                        if (k + 1 == colNum && val > maxVal) {
                            maxVal = val;
                        }
                    }
                    pc.push(val);
                }
                combatantData.push(pc);
            }

            if (combatantData.length <= 0) break;
            combatantData.sort((a, b) => {
                let retVal = 0;
                if (a[colNum] < b[colNum])
                    retVal = -1;
                if (a[colNum] > b[colNum])
                    retVal = 1;

                if (!tables[i].ascending)
                    retVal *= -1;
                
                return retVal;
            });

			// create table
			for (let j = 0; j < combatantData.length; j++) {
                let row = document.createElement("tr");
                let selectedColor = "black";
                let role = jobToRole(data.Combatant[combatantData[j][0]].Job);
                let bgbar = 100;
                if (this.ActCombatantKeys[tables[i].cols[colNum - 1].key].sorttype == "number") {
                    bgbar = combatantData[j][colNum] / maxVal * 100;
                }

                switch (role) {
                    case "tank":
                        selectedColor = colorSchemes["tank"];
                        break;
                    case "healer":
                        selectedColor = colorSchemes["healer"];
                        break;
                    case "dps":
                        selectedColor = colorSchemes["dps"];
                        break;
                    default:
                        selectedColor = colorSchemes["other"];
                }
                
                row.classList.add(role);

				for (let k = 1; k < combatantData[j].length; k++) {
                    let cell = document.createElement("td");
                    cell.textContent = combatantData[j][k];
                    row.appendChild(cell);
				}
                tbl.appendChild(row);

                // Hackery of the Ranking Bars.
                row = document.createElement("tr");
                let cell = document.createElement("td");
                cell.colSpan = combatantData[j].length - 1;
                cell.classList.add("longBgBar");
                cell.style.background = `linear-gradient(to right, ${selectedColor} 0%,  ${selectedColor} ${bgbar}%, rgba(0, 0, 0, 0) ${bgbar + 1}%, rgba(0, 0, 0, 0) 100%)`;
                cell.style.height = this.settings.get("rankBarsThickness");
                row.appendChild(cell);
                tbl.appendChild(row);
			}
		}
	}
}