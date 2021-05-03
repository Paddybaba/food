import { createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import SingleBusinessDetails from './src/screens/singleBusinessDetails'

const navigator = createStackNavigator ({
 Search : SearchScreen,
 SingleBusiness : SingleBusinessDetails
},
{
    initialRouteName : "Search", 
    defaultNavigationOptions : {
        title : "Business Search"
    }
})

export default createAppContainer (navigator)