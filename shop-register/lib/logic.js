'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.bala.bc.hl.shopregistation.Ownershipchange} ownershipChange
 * @transaction
 */

 function onOwnershipchange(ownershipChange) {
    var assetRegistry;
    var id = ownershipChange.shop.id; 
 retrun getAssetRegistry('org.bala.bc.hl.shopregistation.shop')
    .then(function(ar){
        assetRegistry =ar;
        return assetRegistry.get(shopId);
    })
    .then(function(shop){
        shop.owner_name=ownershipChange.seller;
        assetRegistry.update(shop);

    })

    
}