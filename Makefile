#!make

include ./seeds/.env

run_containers:
	rm -rf ./client/build
	docker-compose up

aws_ecr_login:
	aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 040636573990.dkr.ecr.us-west-2.amazonaws.com

cognito_create_user_pool:
	aws --endpoint http://localhost:9229 cognito-idp create-user-pool --pool-name $(COGNITO_POOL_NAME)

cognito_list_user_pools:
	aws --endpoint http://localhost:9229 cognito-idp list-user-pools --max-results 10

cognito_list_users:
	aws --endpoint http://localhost:9229 cognito-idp list-users --user-pool-id local_0yzkTCKT

cognito_delete_user:
	aws --endpoint http://localhost:9229 cognito-idp delete-user --user-pool-id local_0yzkTCKT

cognito_add_user:
	aws --endpoint http://localhost:9229 cognito-idp admin-create-user --user-pool-id local_0yzkTCKT --username franznoel --user-attributes "Name=email,Value=franz@tanglao.org Name=phone_number,Value=\"+18172356754\""

cognito_describe_user_pool:
	aws --endpoint http://localhost:9229 cognito-idp describe-user-pool --user-pool-id local_0yzkTCKT

hello:
	printenv
	echo "Hello $(name)!"
