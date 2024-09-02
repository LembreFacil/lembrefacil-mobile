import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { TEMAS } from '../estilos/temas';

export default function BotaoEscolherData() {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios'); // Mantém o picker aberto no iOS
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <View style={{marginTop:25}}>
      <TouchableOpacity
        onPress={showDatepicker}
        style={{
          padding: 10,
          backgroundColor: TEMAS.colors.lightGreen,
          borderRadius: 8,
          alignItems: 'center'
        }}
      >
        <Text style={{ color: TEMAS.colors.white, fontWeight: "bold" }}>
          {"Data de Nascimento"}
        </Text>
      </TouchableOpacity>
      
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}
