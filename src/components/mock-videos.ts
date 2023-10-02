const list = [
	{
		id: '1',
		title: 'An toàn khi sử dụng xà phòng tắm',
		videoUrl: 'https://www.youtube.com/embed/nKB7kex9prI',
		likes: ['abc@test.com', 'bac@test.com'],
		dislikes: [],
		email: 'vinh.phamthanh16@gmail.com',
		description: 'Chào mừng các bạn đến với thế giới của Cảnh sát trưởng Labrador! Labrador và Doberman hạ là những chiến sĩ cảnh sát tài giỏi luôn cố gắng tìm cách để giải quyết các vấn đề dù khó đến đến, họ là những người luôn bảo vệ sự an toàn của người dân và đưa những tên tội phạm xảo quyệt ra trước công lý!\n' +
			'Cảnh sát trưởng Labrador thông minh, hóm hỉnh và hiểu biết, không vụ án nào mà anh ta không giải quyết được!\n' +
			'Cảnh sát Dober dũng cảm, nhanh nhẹn và giỏi Kung Fu. Không tội phạm nào có thể trốn thoát khỏi anh ta!\n' +
			'Mục tiêu của chúng tôi là giúp cho trẻ em từ 3-6 tuổi có thêm nhiều kiến thức về an toàn và kỹ năng sống. Ngoài ra con giúp các em nhận biết về môi trường xung quanh, hỗ trợ cùng các em phát triển toàn diện.'
	},
	{
		id: '2',
		title: 'An toàn khi sử dụng xà phòng tắm',
		videoUrl: 'https://www.youtube.com/watch?v=nKB7kex9prI',
		likes: ['abc@test.com', 'bac@test.com'],
		dislikes: [],
		email: 'vinh.phamthanh16@gmail.com',
		description: 'Chào mừng các bạn đến với thế giới của Cảnh sát trưởng Labrador! Labrador và Doberman hạ là những chiến sĩ cảnh sát tài giỏi luôn cố gắng tìm cách để giải quyết các vấn đề dù khó đến đến, họ là những người luôn bảo vệ sự an toàn của người dân và đưa những tên tội phạm xảo quyệt ra trước công lý!\n' +
			'Cảnh sát trưởng Labrador thông minh, hóm hỉnh và hiểu biết, không vụ án nào mà anh ta không giải quyết được!\n' +
			'Cảnh sát Dober dũng cảm, nhanh nhẹn và giỏi Kung Fu. Không tội phạm nào có thể trốn thoát khỏi anh ta!\n' +
			'Mục tiêu của chúng tôi là giúp cho trẻ em từ 3-6 tuổi có thêm nhiều kiến thức về an toàn và kỹ năng sống. Ngoài ra con giúp các em nhận biết về môi trường xung quanh, hỗ trợ cùng các em phát triển toàn diện.'
	},
	{
		id: '3',
		title: 'An toàn khi sử dụng xà phòng tắm',
		videoUrl: 'https://www.youtube.com/watch?v=nKB7kex9prI',
		likes: ['abc@test.com', 'bac@test.com'],
		dislikes: [],
		email: 'vinh.phamthanh16@gmail.com',
		description: 'Chào mừng các bạn đến với thế giới của Cảnh sát trưởng Labrador! Labrador và Doberman hạ là những chiến sĩ cảnh sát tài giỏi luôn cố gắng tìm cách để giải quyết các vấn đề dù khó đến đến, họ là những người luôn bảo vệ sự an toàn của người dân và đưa những tên tội phạm xảo quyệt ra trước công lý!\n' +
			'Cảnh sát trưởng Labrador thông minh, hóm hỉnh và hiểu biết, không vụ án nào mà anh ta không giải quyết được!\n' +
			'Cảnh sát Dober dũng cảm, nhanh nhẹn và giỏi Kung Fu. Không tội phạm nào có thể trốn thoát khỏi anh ta!\n' +
			'Mục tiêu của chúng tôi là giúp cho trẻ em từ 3-6 tuổi có thêm nhiều kiến thức về an toàn và kỹ năng sống. Ngoài ra con giúp các em nhận biết về môi trường xung quanh, hỗ trợ cùng các em phát triển toàn diện.'
	},
	{
		id: '4',
		title: 'An toàn khi sử dụng xà phòng tắm',
		videoUrl: 'https://www.youtube.com/watch?v=nKB7kex9prI',
		likes: ['abc@test.com', 'bac@test.com'],
		dislikes: [],
		email: 'vinh.phamthanh16@gmail.com',
		description: 'Chào mừng các bạn đến với thế giới của Cảnh sát trưởng Labrador! Labrador và Doberman hạ là những chiến sĩ cảnh sát tài giỏi luôn cố gắng tìm cách để giải quyết các vấn đề dù khó đến đến, họ là những người luôn bảo vệ sự an toàn của người dân và đưa những tên tội phạm xảo quyệt ra trước công lý!\n' +
			'Cảnh sát trưởng Labrador thông minh, hóm hỉnh và hiểu biết, không vụ án nào mà anh ta không giải quyết được!\n' +
			'Cảnh sát Dober dũng cảm, nhanh nhẹn và giỏi Kung Fu. Không tội phạm nào có thể trốn thoát khỏi anh ta!\n' +
			'Mục tiêu của chúng tôi là giúp cho trẻ em từ 3-6 tuổi có thêm nhiều kiến thức về an toàn và kỹ năng sống. Ngoài ra con giúp các em nhận biết về môi trường xung quanh, hỗ trợ cùng các em phát triển toàn diện.'
	},
	{
		id: '5',
		title: 'An toàn khi sử dụng xà phòng tắm',
		videoUrl: 'https://www.youtube.com/watch?v=nKB7kex9prI',
		likes: ['abc@test.com', 'bac@test.com'],
		dislikes: [],
		email: 'vinh.phamthanh16@gmail.com',
		description: 'Chào mừng các bạn đến với thế giới của Cảnh sát trưởng Labrador! Labrador và Doberman hạ là những chiến sĩ cảnh sát tài giỏi luôn cố gắng tìm cách để giải quyết các vấn đề dù khó đến đến, họ là những người luôn bảo vệ sự an toàn của người dân và đưa những tên tội phạm xảo quyệt ra trước công lý!\n' +
			'Cảnh sát trưởng Labrador thông minh, hóm hỉnh và hiểu biết, không vụ án nào mà anh ta không giải quyết được!\n' +
			'Cảnh sát Dober dũng cảm, nhanh nhẹn và giỏi Kung Fu. Không tội phạm nào có thể trốn thoát khỏi anh ta!\n' +
			'Mục tiêu của chúng tôi là giúp cho trẻ em từ 3-6 tuổi có thêm nhiều kiến thức về an toàn và kỹ năng sống. Ngoài ra con giúp các em nhận biết về môi trường xung quanh, hỗ trợ cùng các em phát triển toàn diện.'
	},
	{
		id: '6',
		title: 'An toàn khi sử dụng xà phòng tắm',
		videoUrl: 'https://www.youtube.com/watch?v=nKB7kex9prI',
		likes: ['abc@test.com', 'bac@test.com'],
		dislikes: [],
		email: 'vinh.phamthanh16@gmail.com',
		description: 'Chào mừng các bạn đến với thế giới của Cảnh sát trưởng Labrador! Labrador và Doberman hạ là những chiến sĩ cảnh sát tài giỏi luôn cố gắng tìm cách để giải quyết các vấn đề dù khó đến đến, họ là những người luôn bảo vệ sự an toàn của người dân và đưa những tên tội phạm xảo quyệt ra trước công lý!\n' +
			'Cảnh sát trưởng Labrador thông minh, hóm hỉnh và hiểu biết, không vụ án nào mà anh ta không giải quyết được!\n' +
			'Cảnh sát Dober dũng cảm, nhanh nhẹn và giỏi Kung Fu. Không tội phạm nào có thể trốn thoát khỏi anh ta!\n' +
			'Mục tiêu của chúng tôi là giúp cho trẻ em từ 3-6 tuổi có thêm nhiều kiến thức về an toàn và kỹ năng sống. Ngoài ra con giúp các em nhận biết về môi trường xung quanh, hỗ trợ cùng các em phát triển toàn diện.'
	},
	{
		id: '7',
		title: 'An toàn khi sử dụng xà phòng tắm',
		videoUrl: 'https://www.youtube.com/watch?v=nKB7kex9prI',
		likes: ['abc@test.com', 'bac@test.com'],
		dislikes: [],
		email: 'vinh.phamthanh16@gmail.com',
		description: 'Chào mừng các bạn đến với thế giới của Cảnh sát trưởng Labrador! Labrador và Doberman hạ là những chiến sĩ cảnh sát tài giỏi luôn cố gắng tìm cách để giải quyết các vấn đề dù khó đến đến, họ là những người luôn bảo vệ sự an toàn của người dân và đưa những tên tội phạm xảo quyệt ra trước công lý!\n' +
			'Cảnh sát trưởng Labrador thông minh, hóm hỉnh và hiểu biết, không vụ án nào mà anh ta không giải quyết được!\n' +
			'Cảnh sát Dober dũng cảm, nhanh nhẹn và giỏi Kung Fu. Không tội phạm nào có thể trốn thoát khỏi anh ta!\n' +
			'Mục tiêu của chúng tôi là giúp cho trẻ em từ 3-6 tuổi có thêm nhiều kiến thức về an toàn và kỹ năng sống. Ngoài ra con giúp các em nhận biết về môi trường xung quanh, hỗ trợ cùng các em phát triển toàn diện.'
	},
	{
		id: '8',
		title: 'An toàn khi sử dụng xà phòng tắm',
		videoUrl: 'https://www.youtube.com/watch?v=nKB7kex9prI',
		likes: ['abc@test.com', 'bac@test.com'],
		dislikes: [],
		email: 'vinh.phamthanh16@gmail.com',
		description: 'Chào mừng các bạn đến với thế giới của Cảnh sát trưởng Labrador! Labrador và Doberman hạ là những chiến sĩ cảnh sát tài giỏi luôn cố gắng tìm cách để giải quyết các vấn đề dù khó đến đến, họ là những người luôn bảo vệ sự an toàn của người dân và đưa những tên tội phạm xảo quyệt ra trước công lý!\n' +
			'Cảnh sát trưởng Labrador thông minh, hóm hỉnh và hiểu biết, không vụ án nào mà anh ta không giải quyết được!\n' +
			'Cảnh sát Dober dũng cảm, nhanh nhẹn và giỏi Kung Fu. Không tội phạm nào có thể trốn thoát khỏi anh ta!\n' +
			'Mục tiêu của chúng tôi là giúp cho trẻ em từ 3-6 tuổi có thêm nhiều kiến thức về an toàn và kỹ năng sống. Ngoài ra con giúp các em nhận biết về môi trường xung quanh, hỗ trợ cùng các em phát triển toàn diện.'
	},
	{
		id: '9',
		title: 'An toàn khi sử dụng xà phòng tắm',
		videoUrl: 'https://www.youtube.com/watch?v=nKB7kex9prI',
		likes: ['abc@test.com', 'bac@test.com'],
		dislikes: [],
		email: 'vinh.phamthanh16@gmail.com',
		description: 'Chào mừng các bạn đến với thế giới của Cảnh sát trưởng Labrador! Labrador và Doberman hạ là những chiến sĩ cảnh sát tài giỏi luôn cố gắng tìm cách để giải quyết các vấn đề dù khó đến đến, họ là những người luôn bảo vệ sự an toàn của người dân và đưa những tên tội phạm xảo quyệt ra trước công lý!\n' +
			'Cảnh sát trưởng Labrador thông minh, hóm hỉnh và hiểu biết, không vụ án nào mà anh ta không giải quyết được!\n' +
			'Cảnh sát Dober dũng cảm, nhanh nhẹn và giỏi Kung Fu. Không tội phạm nào có thể trốn thoát khỏi anh ta!\n' +
			'Mục tiêu của chúng tôi là giúp cho trẻ em từ 3-6 tuổi có thêm nhiều kiến thức về an toàn và kỹ năng sống. Ngoài ra con giúp các em nhận biết về môi trường xung quanh, hỗ trợ cùng các em phát triển toàn diện.'
	},
	{
		id: '10',
		title: 'An toàn khi sử dụng xà phòng tắm',
		videoUrl: 'https://www.youtube.com/watch?v=nKB7kex9prI',
		likes: ['abc@test.com', 'bac@test.com'],
		dislikes: [],
		email: 'vinh.phamthanh16@gmail.com',
		description: 'Chào mừng các bạn đến với thế giới của Cảnh sát trưởng Labrador! Labrador và Doberman hạ là những chiến sĩ cảnh sát tài giỏi luôn cố gắng tìm cách để giải quyết các vấn đề dù khó đến đến, họ là những người luôn bảo vệ sự an toàn của người dân và đưa những tên tội phạm xảo quyệt ra trước công lý!\n' +
			'Cảnh sát trưởng Labrador thông minh, hóm hỉnh và hiểu biết, không vụ án nào mà anh ta không giải quyết được!\n' +
			'Cảnh sát Dober dũng cảm, nhanh nhẹn và giỏi Kung Fu. Không tội phạm nào có thể trốn thoát khỏi anh ta!\n' +
			'Mục tiêu của chúng tôi là giúp cho trẻ em từ 3-6 tuổi có thêm nhiều kiến thức về an toàn và kỹ năng sống. Ngoài ra con giúp các em nhận biết về môi trường xung quanh, hỗ trợ cùng các em phát triển toàn diện.'
	},
	{
		id: '11',
		title: 'An toàn khi sử dụng xà phòng tắm',
		videoUrl: 'https://player.vimeo.com/external/325698769.sd.mp4?s=4e70164190f4b472059c9f4ca74ca0ca58056ce4&profile_id=165',
		likes: ['abc@test.com', 'bac@test.com'],
		dislikes: [],
		email: 'vinh.phamthanh16@gmail.com',
		description: 'Chào mừng các bạn đến với thế giới của Cảnh sát trưởng Labrador! Labrador và Doberman hạ là những chiến sĩ cảnh sát tài giỏi luôn cố gắng tìm cách để giải quyết các vấn đề dù khó đến đến, họ là những người luôn bảo vệ sự an toàn của người dân và đưa những tên tội phạm xảo quyệt ra trước công lý!\n' +
			'Cảnh sát trưởng Labrador thông minh, hóm hỉnh và hiểu biết, không vụ án nào mà anh ta không giải quyết được!\n' +
			'Cảnh sát Dober dũng cảm, nhanh nhẹn và giỏi Kung Fu. Không tội phạm nào có thể trốn thoát khỏi anh ta!\n' +
			'Mục tiêu của chúng tôi là giúp cho trẻ em từ 3-6 tuổi có thêm nhiều kiến thức về an toàn và kỹ năng sống. Ngoài ra con giúp các em nhận biết về môi trường xung quanh, hỗ trợ cùng các em phát triển toàn diện.'
	},
	{
		id: '12',
		title: 'An toàn khi sử dụng xà phòng tắm',
		videoUrl: 'https://www.youtube.com/watch?v=nKB7kex9prI',
		likes: ['abc@test.com', 'bac@test.com'],
		dislikes: [],
		email: 'vinh.phamthanh16@gmail.com',
		description: 'Chào mừng các bạn đến với thế giới của Cảnh sát trưởng Labrador! Labrador và Doberman hạ là những chiến sĩ cảnh sát tài giỏi luôn cố gắng tìm cách để giải quyết các vấn đề dù khó đến đến, họ là những người luôn bảo vệ sự an toàn của người dân và đưa những tên tội phạm xảo quyệt ra trước công lý!\n' +
			'Cảnh sát trưởng Labrador thông minh, hóm hỉnh và hiểu biết, không vụ án nào mà anh ta không giải quyết được!\n' +
			'Cảnh sát Dober dũng cảm, nhanh nhẹn và giỏi Kung Fu. Không tội phạm nào có thể trốn thoát khỏi anh ta!\n' +
			'Mục tiêu của chúng tôi là giúp cho trẻ em từ 3-6 tuổi có thêm nhiều kiến thức về an toàn và kỹ năng sống. Ngoài ra con giúp các em nhận biết về môi trường xung quanh, hỗ trợ cùng các em phát triển toàn diện.'
	},
	{
		id: '13',
		title: 'An toàn khi sử dụng xà phòng tắm',
		videoUrl: 'https://www.youtube.com/watch?v=nKB7kex9prI',
		likes: ['abc@test.com', 'bac@test.com'],
		dislikes: [],
		email: 'vinh.phamthanh16@gmail.com',
		description: 'Chào mừng các bạn đến với thế giới của Cảnh sát trưởng Labrador! Labrador và Doberman hạ là những chiến sĩ cảnh sát tài giỏi luôn cố gắng tìm cách để giải quyết các vấn đề dù khó đến đến, họ là những người luôn bảo vệ sự an toàn của người dân và đưa những tên tội phạm xảo quyệt ra trước công lý!\n' +
			'Cảnh sát trưởng Labrador thông minh, hóm hỉnh và hiểu biết, không vụ án nào mà anh ta không giải quyết được!\n' +
			'Cảnh sát Dober dũng cảm, nhanh nhẹn và giỏi Kung Fu. Không tội phạm nào có thể trốn thoát khỏi anh ta!\n' +
			'Mục tiêu của chúng tôi là giúp cho trẻ em từ 3-6 tuổi có thêm nhiều kiến thức về an toàn và kỹ năng sống. Ngoài ra con giúp các em nhận biết về môi trường xung quanh, hỗ trợ cùng các em phát triển toàn diện.'
	},
	{
		id: '14',
		title: 'An toàn khi sử dụng xà phòng tắm',
		videoUrl: 'https://www.youtube.com/watch?v=nKB7kex9prI',
		likes: ['abc@test.com', 'bac@test.com'],
		dislikes: [],
		email: 'vinh.phamthanh16@gmail.com',
		description: 'Chào mừng các bạn đến với thế giới của Cảnh sát trưởng Labrador! Labrador và Doberman hạ là những chiến sĩ cảnh sát tài giỏi luôn cố gắng tìm cách để giải quyết các vấn đề dù khó đến đến, họ là những người luôn bảo vệ sự an toàn của người dân và đưa những tên tội phạm xảo quyệt ra trước công lý!\n' +
			'Cảnh sát trưởng Labrador thông minh, hóm hỉnh và hiểu biết, không vụ án nào mà anh ta không giải quyết được!\n' +
			'Cảnh sát Dober dũng cảm, nhanh nhẹn và giỏi Kung Fu. Không tội phạm nào có thể trốn thoát khỏi anh ta!\n' +
			'Mục tiêu của chúng tôi là giúp cho trẻ em từ 3-6 tuổi có thêm nhiều kiến thức về an toàn và kỹ năng sống. Ngoài ra con giúp các em nhận biết về môi trường xung quanh, hỗ trợ cùng các em phát triển toàn diện.'
	},
	{
		id: '15',
		title: 'An toàn khi sử dụng xà phòng tắm',
		videoUrl: 'https://player.vimeo.com/external/325698769.sd.mp4?s=4e70164190f4b472059c9f4ca74ca0ca58056ce4&profile_id=165',
		likes: ['abc@test.com', 'bac@test.com'],
		dislikes: [],
		email: 'vinh.phamthanh16@gmail.com',
		description: 'Chào mừng các bạn đến với thế giới của Cảnh sát trưởng Labrador! Labrador và Doberman hạ là những chiến sĩ cảnh sát tài giỏi luôn cố gắng tìm cách để giải quyết các vấn đề dù khó đến đến, họ là những người luôn bảo vệ sự an toàn của người dân và đưa những tên tội phạm xảo quyệt ra trước công lý!\n' +
			'Cảnh sát trưởng Labrador thông minh, hóm hỉnh và hiểu biết, không vụ án nào mà anh ta không giải quyết được!\n' +
			'Cảnh sát Dober dũng cảm, nhanh nhẹn và giỏi Kung Fu. Không tội phạm nào có thể trốn thoát khỏi anh ta!\n' +
			'Mục tiêu của chúng tôi là giúp cho trẻ em từ 3-6 tuổi có thêm nhiều kiến thức về an toàn và kỹ năng sống. Ngoài ra con giúp các em nhận biết về môi trường xung quanh, hỗ trợ cùng các em phát triển toàn diện.'
	}
]

export default list