module.exports = {
    url: 'https://www.timeanddate.com/date/timeduration.html',

    elements: {
        nameQueryInput: '#et_pb_contact_name_0',
        messageQueryInput: '#et_pb_contact_message_0',
        submitButton: '#subbut2',
        addDays: '#datetabs_dateadd',
        workDays:'#datetabs_workdays',
        repeat: "label[for='re']",
        repeatvalue: "#rec",
        includeTime: "#linktime",


        startHours: '#h1',
        startMinutes: '#i1',
        startSeconds: '#s1',

        endHours: '#h2',
        endMinutes: '#i2',
        endSeconds: '#s2',

        startDay: '#d1',
        startMonth: '#m1',
        startYear: '#y1',

        endDay: '#d2',
        endMonth: '#m2',
        endYear: '#y2',
        submitButton1: '#subbut',



    },

    props: {
        pauseTime: 5000
      },

    commands: [{

        hover(element) {
            return this.moveToElement(element, 10, 10);
        },

        submit() {

            return this.click('@submitButton');

        },
        submitFindBusinessDays() {

            return this.click('@submitButton1');

        },




        setQueryName(value) {

            return this.setValue('@nameQueryInput', value);
        },

        setQueryMesssage(value) {

            return this.setValue('@messageQueryInput', value);
        },

        selectQueryvalue(selector, value) {

            return this
                .waitForElementPresent(selector)
                .click(selector)
                .setValue(selector, value);

        },

        setStartTime(hours, minutes, seconds) {


            return this
                .setValue('@startHours', hours)
                .setValue('@startMinutes', minutes)
                .setValue('@startSeconds', seconds)


        },
        setEndTime(hours, minutes, seconds) {


            return this
                .setValue('@endHours', hours)
                .setValue('@endMinutes', minutes)
                .setValue('@endSeconds', seconds)


        },

        setStartDate(day, month, year) {


            return this
                .clearValue('@startDay').setValue('@startDay', day)
                .clearValue('@startMonth').setValue('@startMonth', month)
                .clearValue('@startYear').setValue('@startYear', year)


        },
        setEndDate(day, month, year) {


            return this
                .setValue('@endDay', day)
                .setValue('@endMonth', month)
                .setValue('@endYear', year)


        },

        switchtoAddDays() {

            return this.click('@addDays');

        },

        switchtoBuisnessDays() {

            return this.click('@workDays');
        },


        addOrSubtract(value) {
            return this
                .pause(5000)
                .useXpath()
                // .waitForElementPresent("//select[@id='type']",10000)
                .click(`//option[@value='${value}']`)

                .pause(5000)
        },

        isRepeat(flag, repeatTimes) {
            if (flag == true) {
                return this.click('@repeat')
                    .waitForElementPresent("@repeatvalue")
                    .setValue('@repeatvalue', repeatTimes)

            }
        },

        includeTime(flag) {
            if (flag == true) {
                return this.waitForElementPresent("@includeTime")
                    .click('@includeTime')
            }

        },


        customPause () {
           return this.api.pause(this.props.pauseTime);
          },
        


    }

    ]

};