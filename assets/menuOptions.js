import ScreenNames from "../routs/ScreenNames";


const a = () => {
() => router.navigate('Details')}

export default [
  
  {
    name: 'Controls',
    iconName: 'car',
    href: '/controls',
    screenName: ScreenNames.Controls
    

  }
  ,
  {
    
    name: 'Climate',
    iconName: 'fan',
    href: '/climate',
    screenName: ScreenNames.ClimateScreen

  },
  { 
    name: 'Location',
    iconName: 'map-marker',
    href: '/location',
    screenName: ScreenNames.Location

  },
  {
    name: 'Summon',
    iconName: 'ship-wheel',
    href: '/summon',
    onpress:{}
  },
  {
    name: 'Security',
    iconName: 'shield-check',
    href: '/security',
    onpress:{}
  },
  {
    name: 'Updates',
    iconName: 'update',
    href: '/updates',
    onpress:{}
  },
  {
    name: 'Pet mode',
    iconName: 'dog',
    href: '/pet-mode',
    onpress:{}
  },
];
