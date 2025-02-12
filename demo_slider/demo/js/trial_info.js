var example_trial_info = [
    {
        "trial": "E1"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had YJ played instead of GB?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> GB </b></span> to blame for this team's loss?",
        "trial": "E2"
    }
];

var full_trial_info = [
    {
        "cf_prompt": "How likely is it that the team would have won had PH played instead of KE?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> NX </b></span> to blame for this team's loss?",
        "trial": "1",
        "slide6": "trials/trial1-6.png",
        "slide7": "trials/trial1-7.png",
        "slide1": "trials/trial1-1.png",
        "slide3": "trials/trial1-3.png",
        "slide4": "trials/trial1-4.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had KJ played instead of FI?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> FI </b></span> to blame for this team's loss?",
        "trial": "2",
        "slide6": "trials/trial2-6.png",
        "slide7": "trials/trial2-7.png",
        "slide1": "trials/trial2-1.png",
        "slide3": "trials/trial2-3.png",
        "slide4": "trials/trial2-4.png"
    }
];

var condensed_trial_info = [
    {
        "cf_prompt": "How likely is it that the team would have won had ML played instead of OJ?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> OJ </b></span> to blame for this team's loss?",
        "trial": "3",
        "slide6": "trials/trial3-6.png",
        "slide7": "trials/trial3-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had OQ played instead of BD?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> SM </b></span> to blame for this team's loss?",
        "trial": "4",
        "slide6": "trials/trial4-6.png",
        "slide7": "trials/trial4-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had ZU played instead of CW?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> CW </b></span> to blame for this team's loss?",
        "trial": "5",
        "slide6": "trials/trial5-6.png",
        "slide7": "trials/trial5-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had CK played instead of UX?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> ZH </b></span> to blame for this team's loss?",
        "trial": "6",
        "slide6": "trials/trial6-6.png",
        "slide7": "trials/trial6-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had XU played instead of KA?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> KA </b></span> to blame for this team's loss?",
        "trial": "7",
        "slide6": "trials/trial7-6.png",
        "slide7": "trials/trial7-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had FS played instead of AG?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> RC </b></span> to blame for this team's loss?",
        "trial": "8",
        "slide6": "trials/trial8-6.png",
        "slide7": "trials/trial8-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had DV played instead of FC?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> FC </b></span> to blame for this team's loss?",
        "trial": "9",
        "slide6": "trials/trial9-6.png",
        "slide7": "trials/trial9-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had GX played instead of DT?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> WQ </b></span> to blame for this team's loss?",
        "trial": "10",
        "slide6": "trials/trial10-6.png",
        "slide7": "trials/trial10-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had GL played instead of ZW?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> ZW </b></span> to blame for this team's loss?",
        "trial": "11",
        "slide6": "trials/trial11-6.png",
        "slide7": "trials/trial11-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had TS played instead of AD?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> LV </b></span> to blame for this team's loss?",
        "trial": "12",
        "slide6": "trials/trial12-6.png",
        "slide7": "trials/trial12-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had KG played instead of RU?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> RU </b></span> to blame for this team's loss?",
        "trial": "13",
        "slide6": "trials/trial13-6.png",
        "slide7": "trials/trial13-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had FB played instead of OS?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> TN </b></span> to blame for this team's loss?",
        "trial": "14",
        "slide6": "trials/trial14-6.png",
        "slide7": "trials/trial14-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had XP played instead of OL?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> OL </b></span> to blame for this team's loss?",
        "trial": "15",
        "slide6": "trials/trial15-6.png",
        "slide7": "trials/trial15-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had FL played instead of NV?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> IB </b></span> to blame for this team's loss?",
        "trial": "16",
        "slide6": "trials/trial16-6.png",
        "slide7": "trials/trial16-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had OT played instead of RI?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> RI </b></span> to blame for this team's loss?",
        "trial": "17",
        "slide6": "trials/trial17-6.png",
        "slide7": "trials/trial17-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had ZK played instead of TQ?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> FG </b></span> to blame for this team's loss?",
        "trial": "18",
        "slide6": "trials/trial18-6.png",
        "slide7": "trials/trial18-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had UI played instead of BX?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> BX </b></span> to blame for this team's loss?",
        "trial": "19",
        "slide6": "trials/trial19-6.png",
        "slide7": "trials/trial19-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had PM played instead of BQ?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> SI </b></span> to blame for this team's loss?",
        "trial": "20",
        "slide6": "trials/trial20-6.png",
        "slide7": "trials/trial20-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had TM played instead of OI?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> OI </b></span> to blame for this team's loss?",
        "trial": "21",
        "slide6": "trials/trial21-6.png",
        "slide7": "trials/trial21-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had UR played instead of LC?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> QS </b></span> to blame for this team's loss?",
        "trial": "22",
        "slide6": "trials/trial22-6.png",
        "slide7": "trials/trial22-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had UT played instead of AC?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> AC </b></span> to blame for this team's loss?",
        "trial": "23",
        "slide6": "trials/trial23-6.png",
        "slide7": "trials/trial23-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had LP played instead of WU?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> BM </b></span> to blame for this team's loss?",
        "trial": "24",
        "slide6": "trials/trial24-6.png",
        "slide7": "trials/trial24-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had FD played instead of LZ?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> LZ </b></span> to blame for this team's loss?",
        "trial": "25",
        "slide6": "trials/trial25-6.png",
        "slide7": "trials/trial25-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had ZP played instead of CA?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> DO </b></span> to blame for this team's loss?",
        "trial": "26",
        "slide6": "trials/trial26-6.png",
        "slide7": "trials/trial26-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had WV played instead of HP?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> HP </b></span> to blame for this team's loss?",
        "trial": "27",
        "slide6": "trials/trial27-6.png",
        "slide7": "trials/trial27-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had RB played instead of TY?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> IQ </b></span> to blame for this team's loss?",
        "trial": "28",
        "slide6": "trials/trial28-6.png",
        "slide7": "trials/trial28-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had OK played instead of MX?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> MX </b></span> to blame for this team's loss?",
        "trial": "29",
        "slide6": "trials/trial29-6.png",
        "slide7": "trials/trial29-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had OG played instead of YV?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> EH </b></span> to blame for this team's loss?",
        "trial": "30",
        "slide6": "trials/trial30-6.png",
        "slide7": "trials/trial30-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had VX played instead of HB?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> HB </b></span> to blame for this team's loss?",
        "trial": "X1",
        "slide6": "trials/trialX1-6.png",
        "slide7": "trials/trialX1-7.png"
    },
    {
        "cf_prompt": "How likely is it that the team would have won had RL played instead of KB?",
        "blame_prompt": "To what extent is <span style=\"color:red\"><b> KB </b></span> to blame for this team's loss?",
        "trial": "X2",
        "slide6": "trials/trialX2-6.png",
        "slide7": "trials/trialX2-7.png"
    }
];

var all_images = [
    "trials/trial1-6.png",
    "trials/trial22-6.png",
    "trials/trial22-7.png",
    "trials/trial1-7.png",
    "trials/trialX2-6.png",
    "trials/trial3-7.png",
    "trials/trial20-7.png",
    "trials/trial20-6.png",
    "trials/trial3-6.png",
    "trials/trial1-4.png",
    "trials/trialX2-7.png",
    "trials/trial24-6.png",
    "trials/trial19-6.png",
    "trials/trial7-6.png",
    "trials/trial7-7.png",
    "trials/trial19-7.png",
    "trials/trial24-7.png",
    "trials/trial1-1.png",
    "trials/trial1-3.png",
    "trials/trial26-7.png",
    "trials/trial5-7.png",
    "trials/trial5-6.png",
    "trials/trial26-6.png",
    "trials/trial21-7.png",
    "trials/trial2-7.png",
    "trials/trial2-6.png",
    "trials/trial21-6.png",
    "trials/trial23-6.png",
    "trials/trialX1-7.png",
    "trials/trial2-4.png",
    "trials/trialX1-6.png",
    "trials/trial23-7.png",
    "trials/trial4-7.png",
    "trials/trial2-1.png",
    "trials/trial27-7.png",
    "trials/trial27-6.png",
    "trials/trial4-6.png",
    "trials/trial18-6.png",
    "trials/trial6-6.png",
    "trials/trial25-6.png",
    "trials/trial25-7.png",
    "trials/trial2-3.png",
    "trials/trial6-7.png",
    "trials/trial18-7.png",
    "trials/trial30-6.png",
    "trials/trial14-7.png",
    "trials/trial29-7.png",
    "trials/trial29-6.png",
    "trials/trial14-6.png",
    "trials/trial30-7.png",
    "trials/trialE1-1.png",
    "trials/trial8-6.png",
    "trials/trial16-6.png",
    "trials/trialE1-3.png",
    "trials/trialE1-2.png",
    "trials/trial16-7.png",
    "trials/trial8-7.png",
    "trials/trial12-7.png",
    "trials/trial12-6.png",
    "trials/trialE1-5.png",
    "trials/trial10-6.png",
    "trials/trial10-7.png",
    "trials/trialE1-4.png",
    "trials/trialE2-1.png",
    "trials/trial9-6.png",
    "trials/trial17-6.png",
    "trials/trial17-7.png",
    "trials/trial9-7.png",
    "trials/trial28-7.png",
    "trials/trial15-7.png",
    "trials/trial15-6.png",
    "trials/trialE2-3.png",
    "trials/trial28-6.png",
    "trials/trial11-6.png",
    "trials/trialE2-7.png",
    "trials/trialE2-6.png",
    "trials/trial11-7.png",
    "trials/trial13-7.png",
    "trials/trialE2-4.png",
    "trials/trialE2-5.png",
    "trials/trial13-6.png"
];