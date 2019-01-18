build_date = `date +%Y%m%d%H%M`
commit = `git rev-parse HEAD`
version = `git rev-parse --short HEAD`
package-image = hub.didiyun.com/bearyinnovative/bearyinnovative-tutorials-package:$(version)
release-image = hub.didiyun.com/bearyinnovative/bearyinnovative-tutorials:$(version)

# Common commands

## 编译及构建
.PHONY: release
release:
	npm install grunt-cli \
		&& npm install \
		&& ./node_modules/.bin/grunt tutorial

## 清理当前工作目录
.PHONY: clean
clean:
	git clean -fdx

# Commands used to generate docker image

## 构建 package 镜像
.PHONY: build-package-image
build-package-image:
	docker build . \
		--no-cache \
		--force-rm \
		--build-arg build_date=$(build_date) \
		--build-arg version=$(version) \
		--build-arg commit=$(commit) \
		-t $(package-image) \
		-f package.Dockerfile

## 构建 release 镜像
.PHONY: build-release-image
build-release-image:
	docker build . \
		--no-cache \
		--force-rm \
		--build-arg build_date=$(build_date) \
		--build-arg version=$(version) \
		--build-arg commit=$(commit) \
		-t $(release-image) \
		-f release.Dockerfile

## 使用 package 镜像构建项目
.PHONY: package
package:
	docker run -u`id -u`:`id -g` \
		--rm \
		-v $(CURDIR):/workspace $(package-image)
