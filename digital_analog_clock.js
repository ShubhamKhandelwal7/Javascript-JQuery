
class Clock {
  constructor() { }
  currentTime() {
    var today = new Date();
    this.hour = today.getHours();
    this.minute = today.getMinutes();
    this.second = today.getSeconds();
    this.twelveHours = this.hour % 12;

  }
  init() {
    this.bindEvents();
  }
  bindEvents() {
    this.displayTimeTriggerElement.addEventListener("click", this.displayTime.bind(this));
  }
}


class AnalogClock extends Clock {
  constructor(displayTimeTriggerElement) {
    super();
    this.displayTimeTriggerElement = displayTimeTriggerElement;
  }

  displayTime() {
    this.currentTime();
    this.hourHand = this.twelveHours * 30;
    this.minuteHand = ((Math.trunc(this.minute / 5) * 30) + ((this.minute % 5) * 6));
    this.secondsHand = ((Math.trunc(this.second / 5) * 30) + ((this.second % 5) * 6));
    alert("Analog Time Format :- " + "\n" +
      "Hour Hand at " + this.hourHand + "deg" + "\n" +
      "Minute Hand at " + this.minuteHand + "deg" + "\n" +
      "Second Hand at " + this.secondsHand + "deg");
  }
}

class DigitalClock extends Clock {
  constructor(displayTimeTriggerElement) {
    super();
    this.displayTimeTriggerElement = displayTimeTriggerElement;
  }

  displayTime() {
    this.currentTime();
    this.ampm = this.hour >= 12 ? 'PM' : 'AM';
    this.digitalHours = this.twelveHours;
    this.digitalHours = this.twelveHours ? this.twelveHours : '12';
    this.minute = this.minute < 10 ? '0' + this.minute : this.minute;
    this.second = this.second < 10 ? '0' + this.second : this.second;
    alert("Digital Time Format :- " + "\n" + this.digitalHours + ":" + this.minute + ":" + this.second + " " + this.ampm);
  }
}

var displayTimeTriggerElement = document.getElementById("clock-analog")
var analogVar = new AnalogClock(displayTimeTriggerElement);
analogVar.init();
displayTimeTriggerElement = document.getElementById("clock-digital")
var digitalVar = new DigitalClock(displayTimeTriggerElement);
digitalVar.init();
