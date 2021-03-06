function getSongByDay(user) {
  var weekday = new Date().getDay();
  
  var scheduleQuery = new Parse.Query("WeekdaySchedule");
  scheduleQuery.equalTo("weekday", weekday);
  scheduleQuery.equalTo("user", user);


  return scheduleQuery.first().then(function(schedule) {
    var songQuery = new Parse.Query("Song");
    return songQuery.get(schedule.get('song').id);
  }, function(error) {
    console.log("Error running schedule query: " + error.message);
    return Parse.Promise.error(error.message);
  });
}

module.exports = getSongByDay;