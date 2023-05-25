import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import cover from './BookCover.jpg'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 10,
    height: '501px',
    width: '378px',
    display: 'block'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  image: {
    width: '100px',
    height: '100px',
    display: 'block',
    marginVertical: 15,
    marginHorizontal: 100,
  },
  document: {
    display: 'flex'
  }
});

// Create Document Component
const Book = () => (
  <Document pageLayout='twoPageLeft' style={styles.document} fullScreen>
    <div className='flex space-x-2'>

    <Page
      size="A4" 
      style={styles.page}
      dpi={300}
    >
      <View style={styles.section}>
        <Text>
          asdf asdf adsf
        </Text>
      </View>
      <Image 
        style={styles.image}
        src={cover}
      />
    </Page>
    <Page 
      size="A4" 
      style={styles.page}
      dpi={300}
    >
      <View style={styles.section}>
        <Text>
          asdf asdf adsf
        </Text>
      </View>
      <Image 
        style={styles.image}
        src={cover}
      />
    </Page>
    </div>

  </Document>
);

export default Book