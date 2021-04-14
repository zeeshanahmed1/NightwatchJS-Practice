module.exports = {
    url: 'https://www.ultimateqa.com/filling-out-forms',
    
    elements: {
         nameQueryInput: '#et_pb_contact_name_0',
         messageQueryInput: '#et_pb_contact_message_0',
        // languageDropdown: '#lr_button',
        // lastUpdateDropdown: '#as_qdr_button',
         submitButton: '.et_pb_contact_submit[type="submit"]',
    },
    commands: [{

        hover(element)
        {
                return this.moveToElement(element,10,10);
        },
        
        submit() {
    return this
        .click('@submitButton');
},

        setQueryName(value) {
            return this
                .setValue('@nameQueryInput', value);
        },

        setQueryMesssage(value) {
            return this
                .setValue('@messageQueryInput', value);
        },
        // selectFilter(selector, value) {
        //     return this
        //         .click(selector)
        //         .click(`.goog-menuitem[value="${value}"]`);
        // },
      
    }]
};