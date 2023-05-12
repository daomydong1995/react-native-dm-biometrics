package com.dmbiometrics

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager
import java.util.Collections


class DmBiometricsPackage : ReactPackage {
  override fun createNativeModules(p0: ReactApplicationContext): MutableList<NativeModule> {
    val modules: MutableList<NativeModule> = ArrayList()
    modules.add(ReactNativeDMBiometrics(p0))
    return modules
  }

  override fun createViewManagers(p0: ReactApplicationContext): MutableList<ViewManager<View, ReactShadowNode<*>>> {
    return Collections.emptyList();
  }
}
