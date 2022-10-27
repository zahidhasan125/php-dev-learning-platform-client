import React from 'react';

const FAQ = () => {
    return (
        <div className='lg:w-4/5 w-9/10 mx-auto bg-slate-200 dark:bg-slate-400 my-4 py-4 px-12 rounded-lg'>
            <h2 className='text-2xl font-semibold text-center underline mb-4 dark:text-orange-700'>Frequently Asked Questions(FAQ)</h2>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    1) What is PHP?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <p>* <strong>PHP</strong> stands for Hypertext Preprocessor. It is an open source server-side scripting language which is widely used for web development. It supports many databases like MySQL, Oracle, Sybase, Solid, PostgreSQL, generic ODBC etc.</p>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    2) What is PEAR in PHP?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <p>* <strong>PEAR</strong> is a framework and <em>repository for reusable PHP components</em>. PEAR stands for <strong>PHP Extension and Application Repository</strong>. It contains all types of PHP code snippets and libraries.</p>
                    <p>It also provides a command line interface to install "packages" automatically.</p>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    3) Who is known as the father of PHP?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <p>* <em>Rasmus Lerdorf</em></p>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    4) What was the old name of PHP?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <p>* The old name of PHP was Personal Home Page.</p>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    5) Explain the difference b/w static and dynamic websites?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <p>* In <strong>static websites</strong>, <em>content can't be changed</em> after running the script. You can't change anything on the site. It is predefined.</p>
                    <p>In <strong>dynamic websites</strong>, <em>content of script can be changed at the run time</em>. Its content is regenerated every time a user visit or reload. Google, yahoo and every search engine is the example of dynamic website.</p>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    6) What is the name of scripting engine in PHP?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <p>* The scripting engine that powers PHP is called <em>Zend Engine 2</em>.</p>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    7) Explain the difference between PHP4 and PHP5.
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <p>* PHP4 doesn't support oops concept and uses Zend Engine 1.</p>
                    <p>PHP5 supports oops concept and uses Zend Engine 2.</p>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    8) What are the popular Content Management Systems (CMS) in PHP?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <ul className="list-disc pl-4">
                        <li><strong>WordPress:</strong> WordPress is a free and open-source content management system (CMS) based on PHP & MySQL. It includes a plug-in architecture and template system. It is mostly connected with blogging but supports another kind of web content, containing more traditional mailing lists and forums, media displays, and online stores.</li>
                        <li><strong>Joomla:</strong> Joomla is a free and open-source content management system (CMS) for distributing web content, created by Open Source Matters, Inc. It is based on a model-view-controller web application framework that can be used independently of the CMS.</li>
                        <li><strong>Magento:</strong> Magento is an open source E-trade programming, made by Varien Inc., which is valuable for online business. It has a flexible measured design and is versatile with many control alternatives that are useful for clients. Magento utilizes E-trade stage which offers organization extreme E-business arrangements and extensive support network.</li>
                        <li><strong>Drupal:</strong> Drupal is a CMS platform developed in PHP and distributed under the GNU (General Public License).</li>
                    </ul>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    9) What are the popular frameworks in PHP?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <ul className="list-disc pl-4">
                        <li>CakePHP</li>
                        <li>CodeIgniter</li>
                        <li>Yii 2</li>
                        <li>Symfony</li>
                        <li>Zend Framework etc.</li>
                    </ul>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    10) Which programming language does PHP resemble to?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <p>* PHP has borrowed its syntax from Perl and C.</p>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    11) List some of the features of PHP7.
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <ul className="list-disc pl-4">
                        <li>Scalar type declarations</li>
                        <li>Return type declarations</li>
                        <li>Null coalescing operator (??)</li>
                        <li>Spaceship operator</li>
                        <li>Constant arrays using define()</li>
                        <li>Anonymous classes</li>
                        <li>Closure::call method</li>
                        <li>Group use declaration</li>
                        <li>Generator return expressions</li>
                        <li>Generator delegation</li>
                        <li>Space ship operator</li>
                    </ul>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    12) What is "echo" in PHP?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <p>* PHP echo output one or more string. It is a language construct not a function. So the use of parentheses is not required. But if you want to pass more than one parameter to echo, the use of parentheses is required.</p>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    13) What is "print" in PHP?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <p>* PHP print output a string. It is a language construct not a function. So the use of parentheses is not required with the argument list. Unlike echo, it always returns 1.</p>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    14) What is the difference between "echo" and "print" in PHP?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <p><strong>Echo</strong> can <em>output one or more string</em> but <strong>print</strong> can only <em>output one string and always returns 1</em>.</p>
                    <p><strong>Echo</strong> is <em>faster than print</em> because it does not return any value.</p>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    15) How a variable is declared in PHP?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <p>* A PHP variable is the name of the memory location that holds data. It is temporary storage.</p>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    16) What is the difference between $message and $$message?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <p><strong>$message</strong> <em>stores variable data</em> while <strong>$$message</strong> is used <em>to store variable of variables</em>. </p>
                    <p>$message stores fixed data whereas the data stored in $$message may be changed dynamically.</p>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    17) What are the ways to define a constant in PHP?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <p>PHP constants are name or identifier that can't be changed during execution of the script. PHP constants are defined in two ways:</p>
                    <ul className="list-disc pl-4">
                        <li>Using define() function</li>
                        <li>Using const() function</li>
                    </ul>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    18) What are magic constants in PHP?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <p>* PHP magic constants are predefined constants, which change based on their use. They start with a double underscore (__) and end with a double underscore (__).</p>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    19) How many data types are there in PHP?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <p>PHP data types are used to hold different types of data or values. There are 8 primitive data types which are further categorized in 3 types:</p>
                    <ul className="list-disc pl-4">
                        <li>Scalar types</li>
                        <li>Compound types</li>
                        <li>Special types</li>
                    </ul>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    20) How to do single and multi line comment in PHP?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <p>PHP single line comment is made in two ways:</p>
                    <ul className="list-disc pl-4">
                        <li>Using // (C++ style single line comment)</li>
                        <li>Using # (Unix Shell style single line comment)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FAQ;