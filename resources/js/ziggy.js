const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"login":{"uri":"login","methods":["GET","HEAD"]},"logout":{"uri":"logout","methods":["POST"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.update":{"uri":"reset-password","methods":["POST"]},"register":{"uri":"register","methods":["GET","HEAD"]},"verification.notice":{"uri":"email\/verify","methods":["GET","HEAD"]},"verification.verify":{"uri":"email\/verify\/{id}\/{hash}","methods":["GET","HEAD"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"user-profile-information.update":{"uri":"user\/profile-information","methods":["PUT"]},"user-password.update":{"uri":"user\/password","methods":["PUT"]},"password.confirmation":{"uri":"user\/confirmed-password-status","methods":["GET","HEAD"]},"password.confirm":{"uri":"user\/confirm-password","methods":["POST"]},"two-factor.login":{"uri":"two-factor-challenge","methods":["GET","HEAD"]},"two-factor.enable":{"uri":"user\/two-factor-authentication","methods":["POST"]},"two-factor.confirm":{"uri":"user\/confirmed-two-factor-authentication","methods":["POST"]},"two-factor.disable":{"uri":"user\/two-factor-authentication","methods":["DELETE"]},"two-factor.qr-code":{"uri":"user\/two-factor-qr-code","methods":["GET","HEAD"]},"two-factor.secret-key":{"uri":"user\/two-factor-secret-key","methods":["GET","HEAD"]},"two-factor.recovery-codes":{"uri":"user\/two-factor-recovery-codes","methods":["GET","HEAD"]},"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"profile":{"uri":"profile","methods":["GET","HEAD"]},"profilePhotoDelete":{"uri":"profilePhotoDelete","methods":["DELETE"]},"profilePhotoUpdate":{"uri":"profilePhotoUpdate","methods":["PUT"]},"profileDelete":{"uri":"profileDelete","methods":["DELETE"]},"users.index":{"uri":"users","methods":["GET","HEAD"]},"users.create":{"uri":"users\/create","methods":["GET","HEAD"]},"users.store":{"uri":"users","methods":["POST"]},"users.show":{"uri":"users\/{user}","methods":["GET","HEAD"],"bindings":{"user":"id"}},"users.edit":{"uri":"users\/{user}\/edit","methods":["GET","HEAD"],"bindings":{"user":"id"}},"users.update":{"uri":"users\/{user}","methods":["PUT","PATCH"],"bindings":{"user":"id"}},"users.destroy":{"uri":"users\/{user}","methods":["DELETE"],"bindings":{"user":"id"}}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };