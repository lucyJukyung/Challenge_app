/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.java.lang;

public class Object_vendor_133720_36_SeekBarChangeListenerImpl extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        android.widget.SeekBar.OnSeekBarChangeListener {
  public Object_vendor_133720_36_SeekBarChangeListenerImpl() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public void onProgressChanged(android.widget.SeekBar param_0, int param_1, boolean param_2) {
    java.lang.Object[] args = new java.lang.Object[3];
    args[0] = param_0;
    args[1] = param_1;
    args[2] = param_2;
    com.tns.Runtime.callJSMethod(this, "onProgressChanged", void.class, args);
  }

  public void onStartTrackingTouch(android.widget.SeekBar param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onStartTrackingTouch", void.class, args);
  }

  public void onStopTrackingTouch(android.widget.SeekBar param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onStopTrackingTouch", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
