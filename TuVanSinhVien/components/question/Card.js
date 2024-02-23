import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

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
        title={item.title}
        fullName={item.userFullName}
        avatar={item.userAvatar}
        createdAt={item.createdAt}
        views={item.views}
      />
      {isExpanded && (
        <>
          <CardBody content={item.content} />
          <CardFooter answer={item.answer} fullName={item.answerFullName} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginVertical: 6,
  },
});
