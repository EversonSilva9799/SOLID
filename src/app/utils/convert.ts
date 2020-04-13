const convert = {
	toJson(dado: any) {
		return JSON.stringify(dado);
	},

	toObject(dado: any) {
		return JSON.parse(dado);
	}
};

export default convert;
