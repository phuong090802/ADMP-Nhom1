import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import CardHeader from './CardHeader';
import CardBody from './CardBody';

export default function Card({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleToggle() {
    setIsExpanded((prevData) => !prevData);
  }

  return (
    <View style={styles.root}>
      <CardHeader
        onPress={handleToggle}
        isExpanded={isExpanded}
        fullName={item.fullName}
        avatar={item.avatar}
      />
      {isExpanded && (
        <CardBody
          phoneNumber={item.phoneNumber}
          email={item.email}
          departmentName={item.departmentName}
          role={item.role}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginVertical: 6,
  },
});
