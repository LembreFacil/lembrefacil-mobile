import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import PushNotification from 'react-native-push-notification';


const Remedios = () => {
  const [time, setTime] = useState('');

  const scheduleAlarm = () => {
    const [hour, minute] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(0);

    PushNotification.localNotificationSchedule({
      message: "Alarme disparado!", // Mensagem do alarme
      date: date, // Data e hora do alarme
    });

    alert('Alarme agendado para ' + time);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Alarme</Text>
      <TextInput
        style={styles.input}
        placeholder="HH:MM"
        value={time}
        onChangeText={setTime}
      />
      <Button title="Agendar Alarme" onPress={scheduleAlarm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    textAlign: 'center',
  },
});

export default Remedios;
