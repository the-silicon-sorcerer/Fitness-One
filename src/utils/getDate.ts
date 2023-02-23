import { retryDelay } from "@trpc/client/dist/internals/retryDelay";

export default function getDate() {
  const dateObj = new Date();
  let date = dateObj.getDate();
  let day: string | number = dateObj.getDay();
  let month: string | number = dateObj.getMonth();

  if (month === 0) {
    month = "January";
  } else if (month === 1) {
    month = "Febuary";
  } else if (month === 2) {
    month = "March";
  } else if (month === 3) {
    month = "April";
  } else if (month === 4) {
    month = "May";
  } else if (month === 5) {
    month = "June";
  } else if (month === 6) {
    month = "July";
  } else if (month === 7) {
    month = "August";
  } else if (month === 8) {
    month = "September";
  } else if (month === 9) {
    month = "October";
  } else if (month === 10) {
    month = "November";
  } else if (month === 11) {
    month = "December";
  }

  if (day === 0) {
    day = "Sunday";
  } else if (day === 1) {
    day = "Monday";
  } else if (day === 2) {
    day = "Tuesday";
  } else if (day === 3) {
    day = "Wednesday";
  } else if (day === 4) {
    day = "Thursday";
  } else if (day === 5) {
    day = "Friday";
  } else if (day === 6) {
    day = "Saturday";
  }

  return { month, day, date };
}
