export interface ProductElseDetail {
    id: number,
    screenTech: number,
    screenResolution: string,
    screenWidth: number,
    maxLight: string, 
	glass: string,
	backCameraResolution: string,
	frontCameraResolution: string,    
	flash: number,
	backCameraFeatures: number[],
	frontCameraFeatures: number[],
	os: string,
	cpu: string,
	cpuSpeed: string,
	gpu: string,
	ram: number, 
	rom: number, 
	romUseable: number,
	contacts: string,
	mobileNetwork: string,
	sim: string,
	bluetooth: string,
	port: string,
	jackPhone: string,
	pinCapacity: number,
	pinType: string,
	maxChargingSupport: number,
	advancedSecurities: number[],
	specialFeatures: number[],
	design: string,
	material: string,
	dimensionAndWeight: string
}