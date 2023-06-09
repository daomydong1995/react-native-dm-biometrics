//
//  LAContext.swift
//  DmCheckBiometricChanged
//
//  Created by Đào Mỹ Đông on 07/04/2566 BE.
//  Copyright © 2566 BE Facebook. All rights reserved.
//

import Foundation
import LocalAuthentication

extension LAContext {

    static var savedBiometricsPolicyState: Data? {
            get {
                UserDefaults.standard.data(forKey: "BiometricsPolicyState")
            }
            set {
                UserDefaults.standard.set(newValue, forKey: "BiometricsPolicyState")
            }
        }

    static func biometricsChanged() -> Bool {
            let context = LAContext()
            var error: NSError?
            context.canEvaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, error: &error)
            
            // If there is no saved policy state yet, save it
            if error == nil && LAContext.savedBiometricsPolicyState == nil {
                LAContext.savedBiometricsPolicyState = context.evaluatedPolicyDomainState
                return false
            }
            
            if let domainState = context.evaluatedPolicyDomainState, domainState != LAContext.savedBiometricsPolicyState {
                return true
            }
            
            return false
        }
}
