<template>
  <div class="flex items-center justify-center h-screen">
    <div class="bg-white bg-opacity-50 font-bold rounded-lg shadow-lg p-10">
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">{{ $t('settings.generalSettings.name') }}</h3>
              <p class="mt-1 text-sm text-gray-700">{{ $t('settings.generalSettings.description') }}</p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="first-name" class="block text-sm font-medium text-gray-700">{{ $t('settings.inputs.firstName') }}</label>
                      <input :disabled="!user.connected" :placeholder="user.connected? user.username : $t('settings.loginFalseInput')" type="text" name="first-name" id="first-name" class="mt-1 block text-gray-500 disable:cursor-not-allowed w-full py-2 px-3 border border-gray-300 bg-white disabled:bg-gray-100 rounded-md focus:outline-none sm:text-sm" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="last-name" class="block text-sm font-medium text-gray-700">{{ $t('settings.inputs.lastName') }}</label>
                      <input :disabled="!user.connected" :placeholder="user.connected? user.lastname : $t('settings.loginFalseInput')" type="text" name="last-name" id="last-name" class="mt-1 block text-gray-500 disable:cursor-not-allowed w-full py-2 px-3 border border-gray-300 bg-white disabled:bg-gray-100 rounded-md focus:outline-none sm:text-sm" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="language" class="block text-sm font-medium text-gray-700">{{ $t('settings.inputs.languages') }}</label>
                      <select id="language" name="language" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm">
                        <option v-for="locale in i18n.global.availableLocales" :key="locale" :value="locale" :selected="i18n.global.locale === locale">{{$t('language.name', locale)}}</option>
                      </select>
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label for="templates" class="block text-sm font-medium text-gray-700">{{ $t('settings.inputs.templates') }}</label>
                      <select id="templates" name="templates" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm">
                        <option>Default</option>
                      </select>
                    </div>

                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>
import i18nP from "../i18n";
import {useToast} from "vue-toastification";
const i18n = await i18nP
const toast = useToast()
import { AppUser } from '../components/user'
const user = AppUser()

$(document).ready(function() {
  $('#language')[0].onchange = function() {
    const locale = $('#language').val();
    i18n.global.locale = locale;
    localStorage.setItem("language", locale);
    toast.success(i18n.global.t('settings.languageUpdated'), {
      timeout: 2500,
      pauseOnHover: true,
      hideProgressBar: false,
      position: "bottom-right",
    });
  };
});
</script>