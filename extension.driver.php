<?php

	class extension_thumbnail extends Extension {

		public function about(){
			return array(
				'name' => 'Thumbnail',
				'version' => '0.2',
				'release-date' => '5th May 2010',
				'author' => array(
						'name' => 'Ross Cairns',
						'website' => 'http://rosscairns.com/',
						'email' => 'ross[~~]electricglen.com'
					)
			);
		}

		public function getSubscribedDelegates(){
			return array(
				array(
					'page' => '/administration/',
					'delegate' => 'AdminPagePreGenerate',
					'callback' => 'appendAssets'
				)
			);
		}

		public function appendAssets($context){
			$callback = Administration::instance()->getPageCallback();

			if ($callback['driver'] == 'publish' && ($callback['context']['page'] == 'index' || $callback['context']['page'] == 'edit')) {
				$page = Administration::instance()->Page;
				
				$page->addScriptToHead(URL . '/extensions/thumbnail/assets/thumbnail.js', 105);
			}
		}

	}
