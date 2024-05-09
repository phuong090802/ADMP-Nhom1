import React, { createRef, forwardRef } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import QuillEditor, { QuillToolbar } from "react-native-cn-quill";
import { fonts } from "../../../../constance";

const MyRichText = ({ editorRef, setValue }) => {
  return (
    <ScrollView style={styles.root}>
      <QuillEditor
        ref={editorRef}
        style={styles.editor}
        initialHtml=""
        onHtmlChange={(html) => setValue(html)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    backgroundColor: "#eaeaea",
    // height: 400,
  },
  editor: {
    padding: 0,
    backgroundColor: "white",
    flex: 1,
    fontFamily: fonts.BahnschriftRegular,
    minHeight: 150,
  },
});

export default MyRichText;
