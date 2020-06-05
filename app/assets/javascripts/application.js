// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require moment 
//= require fullcalendar

/* ********************** */
function eventCalendar() {
    return $('#calendar').fullCalendar({
        events: '/events.json',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        selectable: true,
        selectHelper: true,
        editable: true,
        eventLimit: true
    });
};
function clearCalendar() {
    $('#calendar').fullCalendar('delete');
    $('#calendar').html('');
};

$(document).on('turbolinks:load', function () {
    eventCalendar();
});
$(document).on('turbolinks:before-cache', clearCalendar);
