sentry-bearychat
================

An extension for `Sentry <https://getsentry.com>`_ which posts notifications to a `Bearychat <https://bearychat.com>`_ channel.

.. image:: https://cloud.githubusercontent.com/assets/2056489/4951031/44416b9c-6662-11e4-825d-b179b614828a.png

Started with a fork of the Slack plugin:

`https://github.com/getsentry/sentry-slack <https://github.com/getsentry/sentry-slack>`_

QuickStart
----------

1. Install the package via ``pip``::

    pip install sentry-bearychat

2. Restart your sentry service

3. Login your sentry website, and enter _Manage Integrations_ page of your project.

.. image:: https://cloud.githubusercontent.com/assets/2056489/4988175/bb5e5ef8-6999-11e4-9cef-2f6326a02ef2.png

4. Tick the checkbox of _Bearychat_.

.. image:: https://cloud.githubusercontent.com/assets/2056489/4988184/d775e07a-6999-11e4-853a-72997ccbca6d.png

5. Paste the webhook link form `bearychat` in Webhook field.

.. image:: https://cloud.githubusercontent.com/assets/2056489/4988990/452d51e6-69ab-11e4-87f6-7cb3813ad309.png

.. image:: https://cloud.githubusercontent.com/assets/2056489/4988191/1f70ce30-699a-11e4-9afe-272d03625693.png

6. Then you can get notifications in bearychat.

.. image:: https://cloud.githubusercontent.com/assets/2056489/4951031/44416b9c-6662-11e4-825d-b179b614828a.png
