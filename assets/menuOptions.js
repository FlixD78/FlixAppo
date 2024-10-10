import ScreenNames from "../router/ScreenNames";


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
    screenName: ScreenNames.screen4

    
  },
  {
    name: 'Security',
    iconName: 'shield-check',
    href: '/security',
    screenName: ScreenNames.screen4

  },
  {
    name: 'Updates',
    iconName: 'update',
    href: '/updates',
    screenName: ScreenNames.screen4

  },
  {
    name: 'Pet mode',
    iconName: 'dog',
    href: '/pet-mode',
    screenName: ScreenNames.screen4

  },
];
