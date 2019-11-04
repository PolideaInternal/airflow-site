# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.

from setuptools import setup

with open('README.rst', encoding='utf-8') as file:
    long_description = file.read()

setup(
    name='sphinx_airflow_theme',
    version='0.0.01',
    url='https://github.com/apache/airflow-site/tree/aip-11',
    license='Apache License 2.0',
    author='Dave Snider, Read the Docs, Inc. & contributors',
    author_email='dev@readthedocs.org',
    description='Airflow theme for Sphinx',
    long_description=long_description,
    long_description_content_type='text/markdown',
    zip_safe=False,
    packages=['sphinx_airflow_theme'],
    package_data={'sphinx_airflow_theme': [
        'theme.conf',
        '*.html',
        'static/css/*.css',
        'static/css/fonts/*.*'
        'static/js/*.js',
    ]},
    include_package_data=True,
    # See http://www.sphinx-doc.org/en/stable/theming.html#distribute-your-theme-as-a-python-package
    entry_points = {
        'sphinx.html_themes': [
            'sphinx_airflow_theme = sphinx_airflow_theme',
        ]
    },
    install_requires=[
        'sphinx'
    ],
    tests_require=[],
    extras_require={
        'dev': [],
    },
    classifiers=[
        'Framework :: Sphinx',
        'Framework :: Sphinx :: Theme',
        'License :: OSI Approved :: Apache Software License',
        'Environment :: Console',
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Operating System :: OS Independent',
        'Topic :: Documentation',
        'Topic :: Software Development :: Documentation',
    ],
)
