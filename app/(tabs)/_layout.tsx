import { TabBarChrome } from '@/components/ads/TabBarChrome';
import { TAB_BAR_CONTENT_HEIGHT } from '@/lib/ads/config';
import { theme } from '@/lib/constants/theme';
import { useTranslation } from '@/lib/i18n/I18nProvider';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

function TabNavigator() {
  const { messages } = useTranslation();

  return (
    <Tabs
      tabBar={(props) => <TabBarChrome {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textMuted,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopWidth: 0,
          height: TAB_BAR_CONTENT_HEIGHT,
          paddingTop: 6,
          paddingBottom: 0,
          paddingHorizontal: theme.spacing.margin,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          marginTop: 2,
        },
        tabBarIconStyle: {
          marginBottom: 0,
        },
        tabBarItemStyle: {
          flex: 1,
          paddingHorizontal: 0,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: messages.tabs.home,
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: messages.tabs.add,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: messages.tabs.history,
          tabBarIcon: ({ color, size }) => <Ionicons name="time-outline" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: messages.tabs.info,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default function TabLayout() {
  return <TabNavigator />;
}
