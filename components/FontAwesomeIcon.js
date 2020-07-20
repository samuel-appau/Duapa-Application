import React from 'react';
import { Ionicons,AntDesign,FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function FontAwesomeIcon(props) {
  return (
    <FontAwesome
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
