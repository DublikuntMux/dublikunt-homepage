import Document, {Head, Html, Main, NextScript} from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
						rel="stylesheet"
					/>
					{/* eslint-disable-next-line @next/next/no-title-in-document-head */}
					<title></title>
				</Head>
				<body>
				<Main/>
				<NextScript/>
				</body>
			</Html>
		)
	}
}

export default MyDocument
