<?php

namespace Drupal\custom_block\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a 'Custom Block'.
 *
 * @Block(
 *   id = "custom_block",
 *   admin_label = @Translation("Custom Block"),
 * )
 */
class CustomBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    // Title from block configuration.
    $title = $this->configuration['title'] ?? 'Custom';

    return [
      '#theme' => 'custom_block',
      '#title' => $title,
      '#attached' => [
        'library' => [
          'custom_block/custom_block', // Attach custom JS and CSS.
        ],
      ],
    ];
  }

  /**
   * Block form for title configuration.
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form['title'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Title'),
      '#default_value' => $this->configuration['title'] ?? '',
    ];
    return $form;
  }

  /**
   * Block form submission handler.
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->configuration['title'] = $form_state->getValue('title');
  }
}

