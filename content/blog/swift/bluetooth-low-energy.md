---
title: Swift Bluetooth Low Energy
date: "2019-09-12T20:12:00.121Z"
tags: ["swift"]
header: { type: 'icon', bgColor: '#F61653', icon: 'apple' }
description: How to use Bluetooth low engery in swift
---

I was recently working on a project and need to connect my cell phone to and android controller.

Here is a snippet of swift code that I used to achieve this.

```swift
import UIKit
import CoreBluetooth

class BluetooptheViewController: UIViewController, CBCentralManagerDelegate, CBPeripheralDelegate {
  var manager:CBCentralManager? = nil
  var mainPeripheral:CBPeripheral? = nil
  var mainCharacteristic:CBCharacteristic? = nil
  var peripheral: CBPeripheral?
  var characteristic: CBCharacteristic?
  var ready = false;
  
  @IBAction func buttonPressed(_ sender: Any) {
    if (ready) {
      if let c = self.characteristic {
        if let data = "hello".data(using: String.Encoding.utf8) {
          self.peripheral?.writeValue(data, for: c, type: CBCharacteristicWriteType.withoutResponse)
        }
      }
    }
  }
  var serviceUUID = CBUUID(string: "FFE0")
  var characteristicUUID = CBUUID(string: "FFE1")
  
  override func viewDidLoad() {
    super.viewDidLoad()
    
    manager = CBCentralManager(delegate: self, queue: nil);
    manager?.delegate = self
  }
  
  func centralManagerDidUpdateState(_ central: CBCentralManager) {
    switch central.state{
    case CBManagerState.poweredOn:
      self.manager?.scanForPeripherals(withServices: [serviceUUID], options: nil);
    default:break
    }
  }
  
  func centralManager(_ central: CBCentralManager, didDiscover peripheral: CBPeripheral, advertisementData: [String : Any], rssi RSSI: NSNumber) {
    self.manager?.stopScan();
    self.peripheral = peripheral;
    self.manager?.connect(peripheral, options: nil);
  }
  
  func centralManager(_ central: CBCentralManager, didConnect peripheral: CBPeripheral) {
    peripheral.delegate = self
    peripheral.discoverServices([serviceUUID])
  }
  
  func peripheral(_ peripheral: CBPeripheral, didDiscoverServices error: Error?) {
    if let service = peripheral.services?.first(where: { $0.uuid == serviceUUID }) {
      peripheral.discoverCharacteristics([], for: service);
    }
  }
  
  func peripheral(_ peripheral: CBPeripheral, didDiscoverCharacteristicsFor service: CBService, error: Error?) {
    if let characteristic = service.characteristics?.first(where: { $0.uuid == characteristicUUID }) {
      peripheral.setNotifyValue(true, for: characteristic)
      self.characteristic = characteristic
      self.ready = true;
    }
  }
  
  func peripheral(_ peripheral: CBPeripheral, didUpdateValueFor characteristic: CBCharacteristic, error: Error?) {
    if let str = String(data: characteristic.value!, encoding: String.Encoding.utf8) {
      print(str)
    }
  }
  
  func peripheral(_ peripheral: CBPeripheral, didWriteValueFor characteristic: CBCharacteristic, error: Error?) {
    if error != nil {
      print("error while writing value to \(characteristic.uuid.uuidString): \(error.debugDescription)")
    } else {
      print("didWriteValueFor \(characteristic.uuid.uuidString)")
    }
  }
}
```