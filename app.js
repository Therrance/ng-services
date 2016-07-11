angular.module('app', [])

    .factory('messages', function () {
        var messages = {};

        messages.list = [];

        messages.add = function (message) {
            messages.list.push({id: messages.list.length, text: message})
        };

        return messages;
    })

    .controller('ListCtrl', function (messages) {
        var self = this;

        self.messages = messages.list;
    })

    .controller('PostCtrl', function (messages) {
        var self = this;

        self.newMessage = 'Hello world!';

        self.addMessage = function (message) {
            messages.add(message);
            self.newMessage = '';
        }
    });