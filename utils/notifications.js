import { Notifications, Permissions } from 'expo'
import { fetchNotificationFlag, removeNotificationFlag, setNotificationFlag } from './api'

function createNotification () {
  return {
    title: 'Take a quiz!',
    body: "👋 don't forget to take at least one quiz today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function initializeNotification() {
  fetchNotificationFlag()
    .then((data) => {
      if (data === null) {
        let now = new Date()
        let today = formatAlarmTime(now, 0)
        let tomorrow = formatAlarmTime(now, 1)
        if (today > now) {
          scheduleNotification(today)
        } else {
          scheduleNotification(tomorrow)
        }
      }
  })
}

export function postponeNotification() {
  Notifications.cancelAllScheduledNotificationsAsync()
    .then(() => {
      let now = new Date()
      let tomorrow = formatAlarmTime(now, 1)
      scheduleNotification(tomorrow)
    })
}

function formatAlarmTime(baseDate, adjustDays) {
  let result = new Date()
  result.setDate(baseDate.getDate() + adjustDays)
  result.setHours(22)
  result.setMinutes(0)
  result.setSeconds(0)
  result.setMilliseconds(0)
  return result
}

function scheduleNotification(time) {
  Permissions.askAsync(Permissions.NOTIFICATIONS)
    .then(({ status }) => {
      if (status === 'granted') {
        Notifications.scheduleLocalNotificationAsync(
          createNotification(),
          {
            time,
            repeat: 'day',
          }
        )
        setNotificationFlag()
        console.log('Scheduled daily notification starting at ', time)
      }
    })
}

export function clearNotification() {
  Notifications.cancelAllScheduledNotificationsAsync()
    .then(() => {
      removeNotificationFlag()
    })
}
