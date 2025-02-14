package com.bycoderstest;

import android.app.Application;
import android.content.Context;

import com.agontuk.RNFusedLocation.RNFusedLocationPackage;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import io.invertase.firebase.auth.ReactNativeFirebaseAuthPackage;
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.facebook.react.shell.MainReactPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;

import io.invertase.firebase.app.ReactNativeFirebaseAppPackage;
import io.invertase.firebase.crashlytics.ReactNativeFirebaseCrashlyticsPackage;
import io.realm.react.RealmReactPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.Arrays;
import java.util.List;
import io.invertase.firebase.analytics.ReactNativeFirebaseAnalyticsPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new RNFusedLocationPackage(),
            new MapsPackage(),
            new ReactNativeFirebaseAuthPackage(),
            new RealmReactPackage(),
            new SafeAreaContextPackage(),
            new RNGestureHandlerPackage(),
            new ReactNativeFirebaseAppPackage(),
            new AsyncStoragePackage(),
            new ReactNativeFirebaseAnalyticsPackage(),
            new ReactNativeFirebaseCrashlyticsPackage()
          );
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
      Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.bycoderstest.ReactNativeFlipper");
        aClass
            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
            .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
