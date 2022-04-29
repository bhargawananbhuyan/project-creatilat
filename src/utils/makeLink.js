export default function makeLink(title) {
	return title?.toLowerCase().split(' ').join('-')
}
