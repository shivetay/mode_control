import { theme } from '@/lib/constants/theme';
import { useTranslation } from '@/lib/i18n/I18nProvider';
import { Ionicons } from '@expo/vector-icons';
import { Tabs, usePathname } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function TabNavigator() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const { messages } = useTranslation();
  const isHome = pathname === '/' || pathname === '/index' || pathname.endsWith('/index');

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textMuted,
        tabBarStyle: isHome
          ? { display: 'none' }
          : {
              backgroundColor: theme.colors.surface,
              borderTopColor: theme.colors.outlineVariant,
              borderTopWidth: 1,
              height: 52 + Math.max(insets.bottom, 8),
              paddingTop: 6,
              paddingBottom: Math.max(insets.bottom, 8),
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
